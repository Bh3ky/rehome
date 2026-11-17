import { Suspense } from "react";
import ApplicationsList from "@/components/admin/ApplicationsList";
import { HUBS } from "@/data/admin";

export default function HubsPage({ searchParams }) {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{HUBS.title}</h1>
      <Suspense fallback={null}>
        <ApplicationsList config={HUBS} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
