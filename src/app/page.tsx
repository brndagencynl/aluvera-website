import {
  HeroSection,
  CategoriesCarousel,
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
      
      {/* Categories - Show main product categories */}
      <CategoriesCarousel />
      
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
