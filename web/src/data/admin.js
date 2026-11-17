import { getCampaign } from "@/data/campaigns";

export const ADMIN_NAV = [
  {
    title: "Overview",
    items: [{ label: "Dashboard", href: "/admin", icon: "dashboard" }],
  },
  {
    title: "Applications",
    items: [
      { label: "Offers", href: "/admin/offers", icon: "offers" },
      { label: "Hub applications", href: "/admin/hubs", icon: "hubs" },
    ],
  },
  {
    title: "Account",
    items: [{ label: "Settings", href: "/admin/settings", icon: "settings" }],
  },
];

export const STATUSES = ["new", "screened", "accepted", "declined"];

export const OFFERS = {
  table: "offers",
  path: "/admin/offers",
  title: "Offers",
  bucket: "offer-photos",
  titleKey: "item",
  columns: [
    { label: "Item", key: "item" },
    { label: "Category", key: "category" },
    { label: "Donor", key: "donor_name" },
    { label: "Location", key: "location" },
  ],
  fields: [
    { label: "Item", key: "item" },
    { label: "Category", key: "category" },
    { label: "Condition", key: "condition" },
    { label: "Campaign", key: "campaign_slug", format: (slug) => getCampaign(slug)?.title ?? slug },
    { label: "Size", key: "size" },
    { label: "Location", key: "location" },
    { label: "Cultural notes", key: "cultural_notes", long: true },
    { label: "Donor", key: "donor_name" },
    { label: "Contact", key: "donor_contact" },
  ],
};

export const HUBS = {
  table: "hub_applications",
  path: "/admin/hubs",
  title: "Hub applications",
  bucket: "hub-photos",
  titleKey: "hub_name",
  columns: [
    { label: "Hub", key: "hub_name" },
    { label: "Type", key: "hub_type" },
    { label: "City", key: "city" },
    { label: "Contact person", key: "contact_person" },
  ],
  fields: [
    { label: "Hub", key: "hub_name" },
    { label: "Type", key: "hub_type" },
    { label: "City", key: "city" },
    { label: "Contact person", key: "contact_person" },
    { label: "Contact", key: "contact" },
    { label: "About the hub", key: "about", long: true },
    { label: "What it needs", key: "needs", long: true },
  ],
};
