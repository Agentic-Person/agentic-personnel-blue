import HeroSection from '@/components/sections/HeroSection';
import SolutionSection from '@/components/sections/SolutionSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';
import FloatingNav from '@/components/animations/FloatingNav';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      <HeroSection />
      <SolutionSection />
      <WorkflowSection />
      <ResourcesSection />
      <TeamSection />
      <CTASection />
      <FloatingNav />
    </main>
  );
}