import { Experience } from '@/components/sections/Experience';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Vikash Kumar | Backend & Flutter Developer',
  description: 'Professional experience of Vikash Kumar as a Backend & Flutter Developer, including freelance projects, client work, and development journey over 4+ years.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10 pt-20">
        <Experience />
      </div>
    </div>
  );
}
