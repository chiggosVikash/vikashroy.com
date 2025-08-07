import { Skills } from '@/components/sections/Skills';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills - Vikash Kumar | Backend & Flutter Developer',
  description: 'Explore the technical skills and expertise of Vikash Kumar including Backend development with Node.js & NestJS, Flutter mobile apps, DevOps with AWS & Docker, and database technologies.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10 pt-20">
        <Skills />
      </div>
    </div>
  );
}
