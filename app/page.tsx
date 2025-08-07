import { Hero } from '@/components/sections/Hero';
import { ParticleBackground } from '@/components/ui/particle-background';

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <main className="relative z-10">
        <Hero />
      </main>
    </div>
  );
}