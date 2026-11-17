import ContactDetails from "@/components/contact/ContactDetails";
import { SITE } from "@/config/site";

export const metadata = {
  title: `Contact | ${SITE.name}`,
};

export default function ContactPage() {
  return <ContactDetails />;
}
