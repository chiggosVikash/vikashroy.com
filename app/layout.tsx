import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vikash Kumar - Backend & Flutter Developer | ParivartanX & HamaraTicket Founder',
  description: 'Professional portfolio of Vikash Kumar, Backend & Flutter Developer from Bihar, India. Founder of ParivartanX & HamaraTicket. Specializing in scalable web applications, Flutter mobile apps, and SaaS platforms.',
  keywords: 'backend developer, flutter developer, mobile app development, web development, nodejs, nestjs, mongodb, postgresql, aws, digitalocean, parivartanx, hamaraticket',
  authors: [{ name: 'Vikash Kumar' }],
  creator: 'Vikash Kumar',
  openGraph: {
    title: 'Vikash Kumar - Backend & Flutter Developer',
    description: 'Backend & Flutter Developer from Bihar, India. Building scalable solutions that power real businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Vikash Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikash Kumar - Backend & Flutter Developer',
    description: 'Backend & Flutter Developer from Bihar, India. Building scalable solutions that power real businesses.',
    creator: '@vikash_kumar_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        jetbrainsMono.variable
      )}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}