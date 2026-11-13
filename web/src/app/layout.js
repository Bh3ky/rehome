import { Young_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FooterGate from "@/components/layout/FooterGate";
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
        <Header />
        <main className="[@media(min-width:1024px)_and_(min-height:760px)]:relative [@media(min-width:1024px)_and_(min-height:760px)]:z-10 [@media(min-width:1024px)_and_(min-height:760px)]:bg-white [@media(min-width:1024px)_and_(min-height:760px)]:min-h-svh">
          {children}
        </main>
        <FooterGate>
          <Footer />
        </FooterGate>
      </body>
    </html>
  );
}
