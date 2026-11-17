-- ReHome: tables, security rules and photo buckets.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- Visitors can only INSERT. They cannot read anything back; review submissions in the dashboard.

-- ---------------------------------------------------------------------------
-- Offers (the /offer form)
-- ---------------------------------------------------------------------------
create table if not exists public.offers (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  status        text not null default 'new'
                check (status in ('new', 'screened', 'accepted', 'declined')),
  item          text not null check (char_length(item) <= 200),
  category      text not null check (char_length(category) <= 60),
  condition     text not null check (char_length(condition) <= 30),
  campaign_slug text check (char_length(campaign_slug) <= 100),
  size          text check (char_length(size) <= 100),
  location      text not null check (char_length(location) <= 200),
  cultural_notes text check (char_length(cultural_notes) <= 2000),
  donor_name    text not null check (char_length(donor_name) <= 120),
  donor_contact text not null check (char_length(donor_contact) <= 200),
  photo_paths   text[] not null default '{}'
);

-- ---------------------------------------------------------------------------
-- Hub applications (the /for-hubs form)
-- ---------------------------------------------------------------------------
create table if not exists public.hub_applications (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  status         text not null default 'new'
                 check (status in ('new', 'screened', 'accepted', 'declined')),
  hub_name       text not null check (char_length(hub_name) <= 200),
  hub_type       text not null check (char_length(hub_type) <= 60),
  city           text not null check (char_length(city) <= 100),
  contact_person text not null check (char_length(contact_person) <= 120),
  contact        text not null check (char_length(contact) <= 200),
  about          text not null check (char_length(about) <= 3000),
  needs          text not null check (char_length(needs) <= 3000),
  photo_paths    text[] not null default '{}'
);

-- ---------------------------------------------------------------------------
-- Row level security: the public (anon) role may insert, nothing else
-- ---------------------------------------------------------------------------
alter table public.offers enable row level security;
alter table public.hub_applications enable row level security;

revoke all on public.offers, public.hub_applications from anon, authenticated;
grant insert on public.offers, public.hub_applications to anon;

drop policy if exists "Anyone can submit an offer" on public.offers;
create policy "Anyone can submit an offer"
  on public.offers for insert to anon
  with check (status = 'new');

drop policy if exists "Anyone can submit a hub application" on public.hub_applications;
create policy "Anyone can submit a hub application"
  on public.hub_applications for insert to anon
  with check (status = 'new');

-- ---------------------------------------------------------------------------
-- Photo buckets: private, images only, 5 MB per file
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('offer-photos', 'offer-photos', false, 5242880, array['image/jpeg', 'image/png', 'image/webp']),
  ('hub-photos',   'hub-photos',   false, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can upload offer photos" on storage.objects;
create policy "Anyone can upload offer photos"
  on storage.objects for insert to anon
  with check (bucket_id = 'offer-photos');

drop policy if exists "Anyone can upload hub photos" on storage.objects;
create policy "Anyone can upload hub photos"
  on storage.objects for insert to anon
  with check (bucket_id = 'hub-photos');
