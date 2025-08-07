import { Blog } from '@/components/sections/Blog';
import { BugFix } from '@/components/sections/BugFix';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Vikash Kumar | Backend & Flutter Developer',
  description: 'Read technical articles and tutorials by Vikash Kumar covering Flutter development, backend performance, cloud deployment, debugging techniques, and more development insights.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10 pt-20">
        <Blog />
        <BugFix />
      </div>
    </div>
  );
}
