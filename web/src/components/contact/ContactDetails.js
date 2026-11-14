import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  XSocial,
} from "@/components/ui/icons";
import SlideUp from "@/components/ui/SlideUp";
import { SITE, SOCIALS } from "@/config/site";

const SOCIAL_ICONS = {
  whatsapp: WhatsApp,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: LinkedIn,
  x: XSocial,
};

const value =
  "text-[28px] font-medium leading-[1.2] tracking-[-0.01em] md:text-[40px]";
const link = "underline-offset-4 hover:underline";

export default function ContactDetails() {
  return (
    <div className="overflow-hidden">
      <SlideUp className="min-h-svh bg-white pb-24 pt-40 lg:pt-48">
        <div className="site-container">
          <h1 className="sr-only">Contact us</h1>

          <dl className="flex flex-col gap-14 md:gap-16">
            <div className="grid gap-3 md:grid-cols-2">
              <dt className="text-base text-ink/50">Address</dt>
              <dd className={value}>
                {SITE.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <dt className="text-base text-ink/50">Email</dt>
              <dd className={value}>
                <a href={`mailto:${SITE.email}`} className={link}>
                  {SITE.email}
                </a>
              </dd>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <dt className="text-base text-ink/50">Phone</dt>
              <dd className={value}>
                <a href={`tel:+${SITE.whatsappNumber}`} className={link}>
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <dt className="text-base text-ink/50">Hours</dt>
              <dd className={value}>
                {SITE.hours.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <dt className="text-base text-ink/50">Social</dt>
              <dd>
                <ul className="flex flex-wrap gap-3">
                  {SOCIALS.map((social) => {
                    const Icon = SOCIAL_ICONS[social.key];
                    return (
                      <li key={social.key}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="grid h-12 w-12 place-items-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-white"
                        >
                          <Icon width={22} height={22} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </SlideUp>
    </div>
  );
}
