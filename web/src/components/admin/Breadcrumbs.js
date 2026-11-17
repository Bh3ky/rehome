"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADMIN_NAV } from "@/data/admin";

const PAGES = ADMIN_NAV.flatMap((group) => group.items);

export default function Breadcrumbs() {
  const pathname = usePathname();
  const page = PAGES.find(({ href }) => (href === "/admin" ? pathname === href : pathname.startsWith(href)));

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link href="/admin" className="text-gray-500 transition-colors hover:text-gray-900">
        Admin
      </Link>
      {page && page.href !== "/admin" && (
        <>
          <span className="text-gray-400" aria-hidden="true">/</span>
          <span className="font-medium text-gray-900">{page.label}</span>
        </>
      )}
    </nav>
  );
}
