import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

const styles = {
  primary: "bg-ink text-white hover:bg-ink/90",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-green hover:bg-white/90",
};

export default function Button({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-base font-medium transition-colors ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && <ArrowRight width={18} height={18} />}
    </Link>
  );
}
