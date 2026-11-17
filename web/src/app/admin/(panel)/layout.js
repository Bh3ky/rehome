import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AdminNav from "@/components/admin/AdminNav";
import Breadcrumbs from "@/components/admin/Breadcrumbs";
import UserMenu from "@/components/admin/UserMenu";
import { SITE } from "@/config/site";
import logo from "../../../../public/Logo/logo.png";

export default function PanelLayout({ children }) {
  return (
    <div className="min-h-screen lg:pl-72">
      <aside className="hidden flex-col border-r border-gray-200 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72">
        <Link href="/admin" className="flex h-16 shrink-0 items-center gap-3 border-b border-gray-200 px-6">
          <span className="grid size-10 place-items-center rounded-md border border-gray-200 bg-white">
            <Image src={logo} alt="" width={24} height={24} />
          </span>
          <span className="text-base font-semibold text-gray-900">{SITE.name}</span>
        </Link>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <Suspense fallback={null}>
            <AdminNav />
          </Suspense>
        </div>
        <div className="shrink-0 border-t border-gray-200 p-4">
          <Suspense fallback={<div className="h-10" />}>
            <UserMenu />
          </Suspense>
        </div>
      </aside>
      <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-200 bg-white px-4 sm:px-8">
        <Suspense fallback={null}>
          <Breadcrumbs />
        </Suspense>
      </header>
      <main className="px-4 py-8 sm:px-8">{children}</main>
    </div>
  );
}
