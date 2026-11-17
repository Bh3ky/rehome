import { Suspense } from "react";
import ApplicationDetail from "@/components/admin/ApplicationDetail";
import { HUBS } from "@/data/admin";

export default function HubPage({ params }) {
  return (
    <Suspense fallback={null}>
      <ApplicationDetail config={HUBS} params={params} />
    </Suspense>
  );
}
