import Image from "next/image";
import { PARTNER_HUBS } from "@/data/impact";

export default function PartnerHubs() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <ul className="grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-10 lg:flex lg:justify-between">
          {PARTNER_HUBS.map((hub) => (
            <li key={hub.name}>
              <Image
                src={hub.logo}
                alt={hub.name}
                width={96}
                height={96}
                className="h-20 w-20 rounded-2xl object-cover md:h-24 md:w-24"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
