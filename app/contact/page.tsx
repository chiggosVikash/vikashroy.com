import { Contact } from '@/components/sections/Contact';
import { ParticleBackground } from '@/components/ui/particle-background';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Vikash Kumar | Backend & Flutter Developer',
  description: 'Get in touch with Vikash Kumar for Backend & Flutter development projects. Available for freelance work, consultations, and collaboration on scalable applications.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10 pt-20">
        <Contact />
      </div>
    </div>
  );
}
