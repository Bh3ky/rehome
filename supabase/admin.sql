-- ReHome admin: who may review submissions, and what they may do.
-- Run once in the Supabase dashboard (SQL Editor -> New query -> paste -> Run), AFTER schema.sql.
-- Visitors still cannot read anything. Only people listed in public.admins can.

-- ---------------------------------------------------------------------------
-- The allowlist
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  email text primary key check (email = lower(email))
);

-- Nobody reads this table through the API; is_admin() below reads it with elevated rights.
alter table public.admins enable row level security;
revoke all on public.admins from anon, authenticated;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admins where email = lower(auth.jwt() ->> 'email')
  );
$$;

revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- ---------------------------------------------------------------------------
-- Admins may read submissions and change their status, nothing else
-- ---------------------------------------------------------------------------
grant select on public.offers, public.hub_applications to authenticated;
grant update (status) on public.offers, public.hub_applications to authenticated;

drop policy if exists "Admins can read offers" on public.offers;
create policy "Admins can read offers"
  on public.offers for select to authenticated
  using (public.is_admin());

drop policy if exists "Admins can update offers" on public.offers;
create policy "Admins can update offers"
  on public.offers for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins can read hub applications" on public.hub_applications;
create policy "Admins can read hub applications"
  on public.hub_applications for select to authenticated
  using (public.is_admin());

drop policy if exists "Admins can update hub applications" on public.hub_applications;
create policy "Admins can update hub applications"
  on public.hub_applications for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Photos stay private; admins may read them (the app makes short-lived links).
drop policy if exists "Admins can read submission photos" on storage.objects;
create policy "Admins can read submission photos"
  on storage.objects for select to authenticated
  using (bucket_id in ('offer-photos', 'hub-photos') and public.is_admin());

-- ---------------------------------------------------------------------------
-- Add yourself (replace the address with yours, in lower case), then run again:
--   insert into public.admins (email) values ('you@example.com') on conflict do nothing;
-- ---------------------------------------------------------------------------
