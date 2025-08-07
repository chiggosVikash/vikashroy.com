import { Projects } from '@/components/sections/Projects';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Vikash Kumar | Backend & Flutter Developer',
  description: 'Explore the portfolio of projects by Vikash Kumar including DP Bazaar MLM platform, HamaraTicket booking system, Dehat Fresh grocery platform, and more scalable applications.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10 pt-20">
        <Projects />
      </div>
    </div>
  );
}
