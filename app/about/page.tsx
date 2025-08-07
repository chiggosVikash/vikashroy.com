import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Vikash Kumar | Backend & Flutter Developer',
  description: 'Learn more about Vikash Kumar, a passionate Backend & Flutter Developer from Bihar, India. Founder of ParivartanX & HamaraTicket with expertise in scalable systems and clean architecture.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10">
        <About />
        <Testimonials />
      </div>
    </div>
  );
}
