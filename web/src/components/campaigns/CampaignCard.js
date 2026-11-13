/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProgressRing from "@/components/ui/ProgressRing";

export default function CampaignCard({ campaign }) {
  const { slug, title, hub, needs, photo, received, needed } = campaign;

  return (
    <Link
      href={`/campaigns/${slug}`}
      className="group relative block aspect-[245/341.33] w-full overflow-hidden rounded-lg bg-surface focus-visible:outline-4 focus-visible:outline-green sm:w-[245px]"
    >
      <img
        src={photo}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-black/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="text-base font-bold uppercase leading-tight tracking-wide">
          {title}
        </h3>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
          <div className="overflow-hidden">
            <p className="mt-2 text-xs text-white/70">{hub}</p>
            <p className="mt-1 text-sm leading-snug text-white/90">{needs}</p>
            <div className="mt-3 flex items-center gap-2.5">
              <ProgressRing received={received} needed={needed} size={32} />
              <p className="text-xs font-medium text-white/85">
                {received}/{needed} items
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
