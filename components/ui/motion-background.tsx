'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MotionBackgroundProps {
  variant?: 'grid' | 'particles' | 'floating' | 'combined' | 'trendy' | 'cyberpunk' | 'glassmorphism';
  intensity?: 'subtle' | 'moderate' | 'prominent';
  className?: string;
}

export function MotionBackground({ 
  variant = 'trendy', 
  intensity = 'moderate',
  className = '' 
}: MotionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Enhanced particle system for trendy aesthetic
  useEffect(() => {
    if (variant !== 'particles' && variant !== 'combined' && variant !== 'trendy' && variant !== 'cyberpunk') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create enhanced particles with trendy effects
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'data' | 'cloud' | 'code' | 'sparkle' | 'neon' | 'hologram';
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];
    
    const particleCount = intensity === 'subtle' ? 20 : intensity === 'moderate' ? 35 : 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.3,
        type: ['data', 'cloud', 'code', 'sparkle', 'neon', 'hologram'][Math.floor(Math.random() * 6)] as any,
        color: ['hsl(var(--accent-blue))', 'hsl(var(--accent-cyan))', 'hsl(var(--accent-emerald))', 'hsl(var(--accent-purple))', 'hsl(var(--accent-pink))', 'hsl(var(--accent-orange))'][Math.floor(Math.random() * 6)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update position and rotation
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle with trendy effects
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.type === 'data') {
          // Trendy data points - animated squares
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
        } else if (particle.type === 'cloud') {
          // Cloud elements - animated circles
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          // Add inner glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fill();
        } else if (particle.type === 'code') {
          // Code elements - animated diamonds
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, 0);
          ctx.lineTo(0, particle.size);
          ctx.lineTo(-particle.size, 0);
          ctx.closePath();
          ctx.fill();
        } else if (particle.type === 'sparkle') {
          // Sparkle effect - animated stars
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * Math.PI * 2) / 5;
            const x = Math.cos(angle) * particle.size;
            const y = Math.sin(angle) * particle.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        } else if (particle.type === 'neon') {
          // Neon effect - glowing lines
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(-particle.size, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.stroke();
        } else if (particle.type === 'hologram') {
          // Hologram effect - animated hexagons
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6;
            const x = Math.cos(angle) * particle.size;
            const y = Math.sin(angle) * particle.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
        
        // Connect nearby particles with trendy effects
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.save();
            const alpha = (120 - distance) / 120 * 0.15;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = `hsl(var(--accent-blue))`;
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            // Add glow to connections
            ctx.shadowColor = 'hsl(var(--accent-blue))';
            ctx.shadowBlur = 5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  // Trendy gradient background with animated patterns
  if (variant === 'trendy') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        
        {/* Moving gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Animated grid patterns */}
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0 grid-pattern-2 opacity-20" />
        
        {/* Trendy floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"
          animate={{ 
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Enhanced particle canvas */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ opacity: intensity === 'subtle' ? 0.4 : intensity === 'moderate' ? 0.6 : 0.8 }}
        />
        
        {/* Animated border glow */}
        <motion.div 
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          animate={{ 
            borderColor: [
              'rgba(59, 130, 246, 0.3)',
              'rgba(147, 51, 234, 0.3)',
              'rgba(236, 72, 153, 0.3)',
              'rgba(59, 130, 246, 0.3)'
            ]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
    );
  }

  // Cyberpunk variant with neon effects
  if (variant === 'cyberpunk') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Dark cyberpunk background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80" />
        
        {/* Animated neon grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Neon floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-36 h-36 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0.3)',
              '0 0 40px rgba(6, 182, 212, 0.6)',
              '0 0 20px rgba(6, 182, 212, 0.3)'
            ]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-44 h-44 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            boxShadow: [
              '0 0 20px rgba(236, 72, 153, 0.3)',
              '0 0 40px rgba(236, 72, 153, 0.6)',
              '0 0 20px rgba(236, 72, 153, 0.3)'
            ]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Enhanced particle canvas for cyberpunk */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ opacity: 0.7 }}
        />
      </div>
    );
  }

  // Glassmorphism variant with modern effects
  if (variant === 'glassmorphism') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30" />
        
        {/* Subtle animated patterns */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
        
        {/* Floating glass elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/8 backdrop-blur-xl rounded-3xl border border-white/15"
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Subtle particle canvas */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ opacity: 0.3 }}
        />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 grid-pattern-2 opacity-20" />
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl floating-element"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl floating-element-delayed"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl floating-element-fast"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ opacity: intensity === 'subtle' ? 0.3 : intensity === 'moderate' ? 0.5 : 0.7 }}
        />
      </div>
    );
  }

  // Combined variant (default)
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Grid patterns */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 grid-pattern-2 opacity-15" />
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Subtle particle canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ opacity: 0.2 }}
      />
    </div>
  );
}

// Enhanced floating particles component for sections
export function FloatingParticles({ count = 12, className = '', variant = 'trendy' }: { 
  count?: number; 
  className?: string;
  variant?: 'trendy' | 'cyberpunk' | 'glassmorphism';
}) {
  const getParticleClass = () => {
    switch (variant) {
      case 'cyberpunk':
        return 'particle-cyberpunk';
      case 'glassmorphism':
        return 'particle-glass';
      default:
        return 'particle';
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={getParticleClass()}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Interactive grid component with trendy effects
export function InteractiveGrid({ className = '', variant = 'trendy' }: { 
  className?: string;
  variant?: 'trendy' | 'cyberpunk' | 'glassmorphism';
}) {
  const getGridClass = () => {
    switch (variant) {
      case 'cyberpunk':
        return 'grid-pattern-cyberpunk';
      case 'glassmorphism':
        return 'grid-pattern-glass';
      default:
        return 'grid-pattern';
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className={`absolute inset-0 ${getGridClass()} opacity-20`} />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Additional trendy effects */}
      {variant === 'trendy' && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent"
          animate={{ 
            y: ['100%', '-100%'],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        />
      )}
    </div>
  );
}

// New trendy background variants
export function TrendyBackground({ className = '', intensity = 'moderate' }: { 
  className?: string;
  intensity?: 'subtle' | 'moderate' | 'prominent';
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/15 to-pink-600/15" />
      
      {/* Moving light effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Animated border glow */}
      <motion.div 
        className="absolute inset-0 border border-transparent rounded-lg"
        animate={{ 
          borderColor: [
            'rgba(59, 130, 246, 0.4)',
            'rgba(147, 51, 234, 0.4)',
            'rgba(236, 72, 153, 0.4)',
            'rgba(59, 130, 246, 0.4)'
          ]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Floating trendy elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
