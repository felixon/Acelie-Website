import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  tagline?: string;
}

export default function PageHeader({ title, subtitle, image, tagline }: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center px-6 overflow-hidden pt-16 border-b border-white/5">
      <div className="absolute inset-0 z-0 grayscale contrast-125 saturate-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/95 mix-blend-multiply opacity-80" />
        <div className="absolute inset-0 bg-navy/40" />
      </div>
      <div className="max-w-[1440px] mx-auto w-full relative z-10 text-white">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          {tagline && (
            <h4 className="font-bold text-[10px] tracking-[0.4em] text-gold mb-8 uppercase flex items-center gap-4">
              <span className="w-8 h-px bg-gold" />
              {tagline}
            </h4>
          )}
          <h1 className="text-2xl md:text-3xl font-bold mb-8 uppercase leading-[0.9] tracking-tighter text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      
      {/* Structural Branding */}
      <div className="absolute right-0 bottom-10 rotate-90 origin-right opacity-10">
        <span className="text-[8px] font-bold tracking-[1em] text-white uppercase">ACELIE INSTITUTIONAL FRAMEWORK</span>
      </div>
    </section>
  );
}
