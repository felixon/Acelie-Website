import { motion } from 'motion/react';
import { useRef } from 'react';
import { Shield, Lightbulb, Users, GraduationCap, CheckCircle } from 'lucide-react';
import Logo from '../components/layout/Logo';
import PageHeader from '../components/layout/PageHeader';
import { useAnimePageMotion } from '../hooks/useAnimePageMotion';

// Import local images from about folder
import aboutHeader from '../imgs/about/about-header.jpg';
import visionImg from '../imgs/about/vision.jpg';
import story1 from '../imgs/about/story-1.jpg';
import story2 from '../imgs/about/story-2.jpg';
import story3 from '../imgs/about/story-3.jpg';
import valIntegrity from '../imgs/about/val-integrity.jpg';
import valAccountability from '../imgs/about/val-accountability.jpg';
import valResponsibility from '../imgs/about/val-responsibility.jpg';
import valInnovation from '../imgs/about/val-innovation.jpg';
import valService from '../imgs/about/val-service.jpg';
import valExcellence from '../imgs/about/val-excellence.jpg';
import valCourage from '../imgs/about/val-courage.jpg';
import valSelfGov from '../imgs/about/val-selfgov.jpg';

// Import hero for specific reuse if needed, but primary are in about folder
import hero4 from '../imgs/hero-4.png';

const ACELIE_Meaning = [
  { letter: 'A', word: 'African', desc: 'Rooted in the continent\'s unique cultural heritage and future potential.' },
  { letter: 'C', word: 'Centre', desc: 'A hub for collaborative learning and institutional transformation.' },
  { letter: 'E', word: 'Ethical', desc: 'Grounded in integrity, transparency, and the practice of self-governance.' },
  { letter: 'L', word: 'Leadership', desc: 'Developing leaders who influence for the common good.' },
  { letter: 'I', word: 'Innovation', desc: 'Harnessing STEM and creative problem-solving to solve local challenges.' },
  { letter: 'E', word: 'Entrepreneurship', desc: 'Ethical wealth creation and sustainable economic empowerment.' },
];

export default function About() {
  const pageMotionRef = useAnimePageMotion<HTMLDivElement>();

  return (
    <div ref={pageMotionRef} className="bg-offwhite">
      <PageHeader 
        title="Our Institutional Identity"
        subtitle="ACELIE exists to redefine the governance of Africa by transforming individual character and institutional integrity."
        image={aboutHeader}
        tagline="BEYOND THE TITLE"
      />

      {/* Editorial Story Section - White Catalogue Canvas */}
      <section className="bg-white py-32 px-6 border-b border-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-start mb-24">
            <div className="anime-reveal shrink-0 grayscale">
              <Logo size={140} showText={false} />
            </div>
            <div className="max-w-3xl">
              <h4 className="anime-page-kicker anime-reveal text-[10px] font-bold tracking-[0.4em] text-gold mb-10 uppercase">INSTITUTIONAL ORIGIN</h4>
              <h1 className="anime-reveal display-xl mb-12 uppercase text-navy">
                Africa's challenges are not <span className="text-gold">structural</span>; they are personal.
              </h1>
              <div className="prose-reno font-body text-charcoal/80 space-y-8 text-lg md:text-xl">
                <p>
                  When I look across our continent, I see a landscape of immense potential often overshadowed by the weight of poor governance. We have institutions, we have resources, and we have a youth population eager to lead. Yet, we remain trapped in a cycle of leadership that prizes power over service.
                </p>
                <div className="anime-hover anime-reveal bg-navy text-white p-12 border-l-8 border-gold overflow-hidden relative">
                   <p className="text-2xl md:text-3xl font-bold leading-[0.95] mb-6 uppercase relative z-10">
                     "Leadership is the root cause. We cannot build strong systems with broken leaders."
                   </p>
                   <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase relative z-10">— ACELIE PHILOSOPHY FRAMEWORK</span>
                   <div className="absolute inset-0 opacity-10 grayscale contrast-200">
                      <img src={story3} alt="" className="w-full h-full object-cover" />
                   </div>
                </div>
                <p>
                  ACELIE was born from this urgency—the need for an institute that treats leadership as a disciplined practice of self-governance, rather than a title.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 h-[400px]">
             <img src={story1} alt="" className="anime-hover anime-reveal w-full h-full object-cover grayscale brightness-75" />
             <img src={story2} alt="" className="anime-hover anime-reveal w-full h-full object-cover grayscale brightness-75" />
          </div>
        </div>
      </section>

      {/* Vision & Mission - Storytelling Dark Band */}
      <section className="surface-dark py-40 px-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20 contrast-125">
           <img src={visionImg} alt="" className="w-full h-full object-cover grayscale" />
           <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h4 className="anime-reveal text-[10px] font-bold tracking-[0.4em] text-white/40 mb-16 uppercase">THE VISION</h4>
          <h2 className="anime-reveal display-xl mb-20 max-w-4xl mx-auto uppercase">
            An Africa transformed by <span className="text-gold">Ethical Responsibility</span>.
          </h2>
          <div className="anime-reveal w-16 h-1 bg-gold mx-auto mb-20" />
          <p className="anime-reveal text-xl md:text-3xl font-bold text-white leading-[1.1] max-w-4xl mx-auto uppercase">
            Cultivating self-aware, innovative leaders by integrating character development into the continental education systems.
          </p>
        </div>
      </section>

      {/* The Name ACELIE - Catalogue Grid */}
      <section className="bg-white py-32 px-6 border-b border-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h4 className="anime-reveal text-[10px] font-bold tracking-[0.4em] text-gold mb-6 uppercase">ETHOS DECONSTRUCTION</h4>
            <h2 className="anime-reveal display-lg uppercase text-navy">The ACELIE Definition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {ACELIE_Meaning.map((item, i) => (
              <div key={i} className="anime-hover anime-reveal bg-white p-12 hover:bg-offwhite transition-all duration-500 group relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-6xl font-bold text-navy/5 group-hover:text-gold/10 transition-colors block mb-10 transform group-hover:-translate-y-2 duration-500">{item.letter}</span>
                  <h3 className="text-3xl font-bold uppercase leading-none mb-6 group-hover:text-gold transition-colors tracking-tighter">{item.word}</h3>
                  <p className="text-base text-charcoal/60 leading-relaxed font-body">{item.desc}</p>
                </div>
                {/* Subtle Decorative Pattern */}
                <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 p-4">
                  <Logo size={80} showText={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-28 px-6 border-b border-hairline">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-14">
          <div>
            <h4 className="anime-reveal text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">GOVERNANCE BASIS</h4>
            <h2 className="anime-reveal display-lg uppercase text-navy mb-8">Non-partisan by constitution.</h2>
            <p className="anime-reveal text-sm md:text-base text-charcoal/65 leading-relaxed max-w-md">
              ACELIE is structured as a non-political, non-partisan institution supporting national development through ethical leadership formation, innovation training, and entrepreneurship education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {[
              {
                title: 'Institutional structure',
                body: 'The organisation consists of a General Assembly, a Board of Directors, and staff.',
              },
              {
                title: 'Membership route',
                body: 'Membership is open to individuals and corporate bodies who share ACELIE values and comply with the constitution.',
              },
              {
                title: 'Accountability rhythm',
                body: 'The General Assembly meets yearly, while the Board meets at least twice a year in ordinary sessions.',
              },
            ].map((item) => (
              <div key={item.title} className="anime-hover anime-reveal bg-white p-8">
                <h3 className="text-xl font-bold uppercase leading-[0.95] tracking-tight text-navy mb-5">{item.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Triple Stripe Mode */}
      <section className="bg-navy py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 text-center">
            <h4 className="anime-reveal text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">FOUNDATIONAL CANONS</h4>
            <h2 className="anime-reveal display-xl text-white uppercase tracking-tighter">Our Core Integrity Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
               { val: 'Integrity', img: valIntegrity },
               { val: 'Accountability', img: valAccountability },
               { val: 'Responsibility', img: valResponsibility },
               { val: 'Innovation', img: valInnovation },
               { val: 'Service', img: valService },
               { val: 'Excellence', img: valExcellence },
               { val: 'Courage', img: valCourage },
               { val: 'Self-governance', img: valSelfGov }
             ].map((item, i) => (
               <div key={i} className="anime-hover anime-reveal aspect-[4/5] bg-white/5 border border-white/10 p-12 flex flex-col justify-end hover:border-gold transition-all duration-700 relative overflow-hidden group">
                  <div className="absolute inset-0 z-0 transition-all duration-1000 group-hover:scale-110 grayscale brightness-50 opacity-40 group-hover:opacity-100 group-hover:brightness-90">
                     <img src={item.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">Value 0{i+1}</span>
                    <h3 className="text-3xl font-bold text-white uppercase leading-none tracking-tighter">{item.val}</h3>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-px bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
               </div>
             ))}
          </div>
        </div>
        {/* Subtle geometric structural line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 pointer-events-none" />
      </section>
    </div>
  );
}
