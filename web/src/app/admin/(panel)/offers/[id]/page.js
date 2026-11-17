import { Suspense } from "react";
import ApplicationDetail from "@/components/admin/ApplicationDetail";
import { OFFERS } from "@/data/admin";

export default function OfferPage({ params }) {
  return (
    <Suspense fallback={null}>
      <ApplicationDetail config={OFFERS} params={params} />
    </Suspense>
  );
}
