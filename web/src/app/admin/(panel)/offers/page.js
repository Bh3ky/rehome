import { Suspense } from "react";
import ApplicationsList from "@/components/admin/ApplicationsList";
import { OFFERS } from "@/data/admin";

export default function OffersPage({ searchParams }) {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{OFFERS.title}</h1>
      <Suspense fallback={null}>
        <ApplicationsList config={OFFERS} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
