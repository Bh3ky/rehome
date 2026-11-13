import Link from "next/link";
import {
  ArrowUpRight,
  Chat,
  Mail,
  MapPin,
  Phone,
} from "@/components/ui/icons";
import {
  FOOTER_INVOLVED,
  FOOTER_NAV,
  SITE,
  whatsappLink,
} from "@/config/site";

const heading =
  "text-sm font-bold uppercase tracking-[0.2em] text-green-soft";
const link = "text-lg text-white/70 transition-colors hover:text-white";

function ContactRow({ icon: Icon, href, children, external }) {
  const content = (
    <>
      <Icon width={22} height={22} className="mt-0.5 shrink-0 text-white/50" />
      <span>{children}</span>
    </>
  );
  const className = `flex items-start gap-3 ${link}`;

  if (!href) return <div className={className}>{content}</div>;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col bg-ink text-white [@media(min-width:1024px)_and_(min-height:760px)]:fixed [@media(min-width:1024px)_and_(min-height:760px)]:inset-x-0 [@media(min-width:1024px)_and_(min-height:760px)]:bottom-0 [@media(min-width:1024px)_and_(min-height:760px)]:z-0 [@media(min-width:1024px)_and_(min-height:760px)]:h-svh">
      <div className="site-container pt-12 [@media(min-width:1024px)_and_(min-height:760px)]:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.9fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <p className={heading}>{SITE.name}</p>
            <p className="mt-6 max-w-md text-[28px] leading-[1.25] text-white/70 md:text-[34px]">
              Rehoming meaningful pieces into the youth and community spaces
              that need them most.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className={heading}>Navigate</p>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={heading}>Get involved</p>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_INVOLVED.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={heading}>Connect</p>
            <div className="mt-5 flex flex-col gap-3">
              <ContactRow icon={Mail} href={`mailto:${SITE.email}`} external>
                {SITE.email}
              </ContactRow>
              <ContactRow icon={Phone} href={whatsappLink()} external>
                {SITE.phoneDisplay}
              </ContactRow>
              <ContactRow icon={MapPin}>{SITE.location}</ContactRow>
              <ContactRow icon={Chat} href="/contact">
                Contact us
              </ContactRow>
            </div>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-1 items-center py-8">
        <svg
          viewBox="0 0 1000 200"
          role="img"
          aria-label={SITE.name}
          className="w-full"
        >
          <text
            x="0"
            y="190"
            fontSize="270"
            fontWeight="400"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="rgba(255,255,255,0.14)"
            style={{ fontFamily: "var(--font-young-serif), serif" }}
          >
            <tspan fill="var(--green-soft)">RE</tspan>HOME
          </text>
        </svg>
      </div>

      <div className="site-container">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-5 text-sm uppercase tracking-wider text-white/60 md:flex-row">
          <p>
            © {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white transition-colors hover:text-green-soft"
          >
            Make an inquiry <ArrowUpRight width={16} height={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
