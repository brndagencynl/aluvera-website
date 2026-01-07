import {
  HeroSection,
  ProductsSection,
  USPSection,
  CraftsmanshipSection,
  ProjectsSection,
  TestimonialsSection,
  BlogSection,
  CTASection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Hero - Main value proposition */}
      <HeroSection />
      
      {/* Products - Show main offerings */}
      <ProductsSection />
      
      {/* USP/Zekerheden - Why choose Aluvera */}
      <USPSection />
      
      {/* Vakmanschap - Company story section */}
      <CraftsmanshipSection />
      
      {/* Projects - Show portfolio */}
      <ProjectsSection />
      
      {/* Reviews/Testimonials - Social proof */}
      <TestimonialsSection />
      
      {/* Blog/Updates - Latest news */}
      <BlogSection />
      
      {/* Main CTA Band - Final conversion */}
      <CTASection />
    </>
  );
}
