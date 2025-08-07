import { GitHub } from '@/components/sections/GitHub';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GitHub - Vikash Kumar | Backend & Flutter Developer',
  description: 'View Vikash Kumar\'s GitHub contributions, repositories, and open-source projects. 52 repositories with active development in Flutter, Node.js, and full-stack applications.',
};

export default function GitHubPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10 pt-20">
        <GitHub />
      </div>
    </div>
  );
}
