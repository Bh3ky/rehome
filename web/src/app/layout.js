import { Young_Serif } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/site";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif",
  display: "swap",
});

export const metadata = {
  title: `${SITE.name}: ${SITE.tagline}`,
  description: SITE.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={youngSerif.variable}>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
