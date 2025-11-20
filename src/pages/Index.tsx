import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { RegionsSection } from "@/components/sections/RegionsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Conserto de Geladeira em BH - Sem Taxa de Visita | Refrizzari</title>
        <meta 
          name="description" 
          content="Conserto de geladeira a domicílio em Belo Horizonte. Sem taxa de visita. Parcele em 6x sem juros. Atendemos todas as regiões de BH e região metropolitana em 24h." 
        />
        <meta name="keywords" content="conserto geladeira bh, assistência técnica geladeira belo horizonte, conserto freezer bh, sem taxa visita bh" />
        <meta name="geo.region" content="BR-MG" />
        <meta name="geo.placename" content="Belo Horizonte" />
        <meta name="geo.position" content="-19.912998;-43.940933" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Conserto de Geladeira em BH - Sem Taxa de Visita | Refrizzari" />
        <meta property="og:description" content="Atendimento rápido em toda BH. Sem taxa de visita. Parcele em 6x sem juros. Garantia de 90 dias." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Refrizzari - Conserto de Geladeiras BH",
            "image": "",
            "description": "Conserto de geladeiras e freezers a domicílio em Belo Horizonte e região metropolitana",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Belo Horizonte",
              "addressRegion": "MG",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -19.912998,
              "longitude": -43.940933
            },
            "url": window.location.href,
            "telephone": "+5531999999999",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "City",
                "name": "Belo Horizonte"
              },
              {
                "@type": "City",
                "name": "Contagem"
              },
              {
                "@type": "City",
                "name": "Betim"
              }
            ],
            "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-12:00"
          })}
        </script>
      </Helmet>

      <Header />
      <main className="min-h-screen pt-32">
        <HeroSection />
        <DifferentialsSection />
        <RegionsSection />
        <ProcessSection />
        <GuaranteesSection />
        <TestimonialsSection />
        <FAQSection />
        <FooterSection />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
