import Footer from "@/components/layout/Footer";
import FooterGate from "@/components/layout/FooterGate";
import Header from "@/components/layout/Header";

export default function SiteChrome({ children }) {
  return (
    <>
      <Header />
      <main className="[@media(min-width:1024px)_and_(min-height:760px)]:relative [@media(min-width:1024px)_and_(min-height:760px)]:z-10 [@media(min-width:1024px)_and_(min-height:760px)]:bg-white [@media(min-width:1024px)_and_(min-height:760px)]:min-h-svh">
        {children}
      </main>
      <FooterGate>
        <Footer />
      </FooterGate>
    </>
  );
}
