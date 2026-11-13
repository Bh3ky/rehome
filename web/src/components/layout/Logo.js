import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";
import logo from "../../../public/Logo/logo.png";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} home`}
      className={`flex items-center ${className}`}
    >
      <Image
        src={logo}
        alt={SITE.name}
        width={96}
        height={96}
        priority
        className="h-20 w-20 md:h-24 md:w-24"
      />
    </Link>
  );
}
