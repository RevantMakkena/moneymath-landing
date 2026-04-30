import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import PopularCalcs from "@/components/PopularCalcs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackgroundDecoration from "@/components/BackgroundDecoration";
import { landingFaqs, siteUrl, calculatorsUrl } from "@/data/siteAeo";
import { popularCalcs } from "@/data/products";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MoneyMath",
    url: siteUrl,
    description:
      "MoneyMath is a suite of free financial, health, and utility calculators for everyday money decisions.",
    publisher: {
      "@type": "Organization",
      name: "Ojas Labs",
      url: "https://ojaslabs.dev",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${calculatorsUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const calculatorListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Popular MoneyMath calculators",
    itemListElement: popularCalcs.map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${calc.name} Calculator`,
      url: `${calculatorsUrl}${calc.path}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={calculatorListSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <div className="relative">
          <BackgroundDecoration />
          <HeroSection />
          <StatsBar />
          <ProductsSection />
        </div>
        <PopularCalcs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
