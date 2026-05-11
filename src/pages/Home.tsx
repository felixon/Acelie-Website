import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Book, Bell, Lightbulb, Users, Shield, Target, GraduationCap, Map, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { animate, createAnimatable, createTimeline, stagger } from 'animejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlideAccordion from '../components/ui/GlideAccordion';

// Import local images
import hero1 from '../imgs/hero-1.png';
import hero2 from '../imgs/hero-2.png';
import hero3 from '../imgs/hero-3.png';
import hero4 from '../imgs/hero-4.png';
import gallery1 from '../imgs/gallery-1.png';
import gallery2 from '../imgs/gallery-2.png';
import gallery3 from '../imgs/gallery-3.png';
import gallery4 from '../imgs/gallery-4.png';
import impactBgImg from '../imgs/impact-bg.png';
import galleryRow2_1 from '../imgs/gallery-row2-1.png';
import galleryRow2_2 from '../imgs/gallery-row2-2.png';
import news1 from '../imgs/news-1.png';
import news2 from '../imgs/news-2.png';
import news3 from '../imgs/news-3.png';
import pillar1 from '../imgs/pillar-1.png';
import pillar2 from '../imgs/pillar-2.png';
import pillar3 from '../imgs/pillar-3.png';

const HERO_SLIDES = [
  {
    image: hero1,
    title: "Raising Ethical Leaders.",
    subtitle: "A non-partisan institution dedicated to cultivating innovative thinkers and entrepreneurial minds across Africa.",
    tagline: "ACELIE INSTITUTIONAL"
  },
  {
    image: hero2,
    title: "Inspiring Innovation.",
    subtitle: "Nurturing the creative ability to solve complex continental challenges through ethical STEM maturity.",
    tagline: "INTELLECTUAL TRANSFORMATION"
  },
  {
    image: hero3,
    title: "Empowering Entrepreneurs.",
    subtitle: "Building sustainable business models grounded in character, accountability, and social responsibility.",
    tagline: "ECONOMIC RESILIENCE"
  },
  {
    image: hero4,
    title: "Revolution in Character.",
    subtitle: "Redefining governance by starting with individual self-governance and moral integrity at the hub.",
    tagline: "SYSTEMIC CHANGE"
  }
];

const Section = ({ children, className = '', id = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-24 px-6 anime-reveal ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

const StatCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center font-display">
      <div className="text-5xl font-bold text-gold mb-2">{count}{target.includes('+') ? '+' : ''}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</div>
    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const motionRootRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = motionRootRef.current;
    const cursor = cursorRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!root || reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const gsapContext = gsap.context(() => {
      gsap.fromTo('.gsap-hero-image', { scale: 1.08 }, { scale: 1, duration: 2.4, ease: 'power3.out' });

      gsap.to('.gsap-hero-image', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.gsap-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>('.gsap-section').forEach((section) => {
        gsap.from(section, {
          y: 42,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 84%',
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.gsap-image-drift').forEach((wrap) => {
        const image = wrap.querySelector('img');
        if (!image) return;

        gsap.to(image, {
          scale: 1.08,
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, root);

    const heroLine = root.querySelector('.anime-hero-line');
    const heroChars = root.querySelectorAll('.anime-hero-char');
    const heroCopy = root.querySelectorAll('.anime-hero-copy');
    const path = root.querySelector<SVGPathElement>('.anime-draw-path');

    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    }

    const intro = createTimeline({
      defaults: {
        ease: 'outExpo',
      },
    });

    intro
      .add(heroLine, { scaleX: [0, 1], duration: 900 }, 0)
      .add(heroChars, { opacity: [0, 1], y: [34, 0], rotateX: [-42, 0], duration: 980, delay: stagger(16) }, 80)
      .add(heroCopy, { opacity: [0, 1], y: [18, 0], duration: 780, delay: stagger(95) }, 420)
      .add(path, { strokeDashoffset: 0, duration: 1600 }, 180);

    const revealItems = Array.from(root.querySelectorAll('.anime-reveal')) as HTMLElement[];
    revealItems.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(34px)';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target, {
          opacity: [0, 1],
          y: [34, 0],
          duration: 950,
          ease: 'outExpo',
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    revealItems.forEach((item) => observer.observe(item));

    const hoverItems = Array.from(root.querySelectorAll('.anime-hover')) as HTMLElement[];
    const enterHandlers: Array<() => void> = [];
    const leaveHandlers: Array<() => void> = [];

    hoverItems.forEach((item) => {
      const enter = () => animate(item, { y: -8, scale: 1.015, duration: 420, ease: 'out(3)' });
      const leave = () => animate(item, { y: 0, scale: 1, duration: 520, ease: 'out(3)' });
      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);
      enterHandlers.push(enter);
      leaveHandlers.push(leave);
    });

    let cursorAnim: ReturnType<typeof createAnimatable> | null = null;
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
    const moveCursor = (event: PointerEvent) => {
      if (!cursorAnim && cursor) {
        cursorAnim = createAnimatable(cursor, {
          x: { duration: 520, ease: 'out(3)' },
          y: { duration: 520, ease: 'out(3)' },
          scale: { duration: 260, ease: 'out(3)' },
        });
      }
      cursorAnim?.x(event.clientX - 14);
      cursorAnim?.y(event.clientY - 14);
    };
    const growCursor = () => cursorAnim?.scale(1.85);
    const shrinkCursor = () => cursorAnim?.scale(1);

    if (supportsFinePointer && cursor) {
      window.addEventListener('pointermove', moveCursor);
      hoverItems.forEach((item) => {
        item.addEventListener('mouseenter', growCursor);
        item.addEventListener('mouseleave', shrinkCursor);
      });
    }

    return () => {
      gsapContext.revert();
      intro.cancel();
      observer.disconnect();
      hoverItems.forEach((item, index) => {
        item.removeEventListener('mouseenter', enterHandlers[index]);
        item.removeEventListener('mouseleave', leaveHandlers[index]);
        item.removeEventListener('mouseenter', growCursor);
        item.removeEventListener('mouseleave', shrinkCursor);
      });
      window.removeEventListener('pointermove', moveCursor);
      cursorAnim?.revert();
    };
  }, []);

  return (
    <div ref={motionRootRef} className="overflow-hidden bg-offwhite">
      <div ref={cursorRef} className="anime-cursor hidden lg:block" />
      {/* Hero Slideshow Section */}
      <section className="gsap-hero relative h-screen min-h-[700px] flex items-center surface-dark px-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 z-0 opacity-30 contrast-125 saturate-50">
               <img 
                 src={HERO_SLIDES[currentSlide].image} 
                 alt="" 
                 className="gsap-hero-image w-full h-full object-cover grayscale"
               />
               <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
            </div>

            <div className="max-w-[1440px] mx-auto w-full h-full flex items-center relative z-10 px-8 md:px-16">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="mb-8">
                    <div className="anime-hero-line w-12 h-px bg-gold mb-4 origin-left" />
                    <h4 className="anime-hero-copy font-bold text-[10px] md:text-xs tracking-[0.4em] text-gold uppercase">
                      {HERO_SLIDES[currentSlide].tagline}
                    </h4>
                  </div>
                  <h1 className="display-xl text-white mb-8 max-w-5xl" aria-label={HERO_SLIDES[currentSlide].title}>
                    <span aria-hidden="true">
                      {HERO_SLIDES[currentSlide].title.split('.')[0].split('').map((char, index) => (
                        <span key={`${currentSlide}-${char}-${index}`} className="anime-hero-char inline-block will-change-transform">
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                      <span className="anime-hero-char inline-block text-gold">.</span>
                    </span>
                  </h1>
                  <p className="anime-hero-copy text-white/60 text-lg md:text-2xl font-body max-w-xl mb-12 leading-relaxed">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </p>
                  
                  <div className="anime-hero-copy flex flex-row flex-wrap gap-3">
                    <Link to="/about" className="anime-hover btn-primary text-xs px-5 py-3">
                      DISCOVER MISSION
                    </Link>
                    <Link to="/get-involved" className="anime-hover border border-white/20 text-white font-bold text-xs px-5 py-3 rounded-none hover:bg-white hover:text-navy transition-colors">
                      GET INVOLVED
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <svg className="absolute bottom-20 right-6 z-10 hidden h-48 w-72 text-gold/70 lg:block" viewBox="0 0 320 220" fill="none" aria-hidden="true">
          <path className="anime-draw-path" d="M12 176 C 78 88, 122 212, 188 96 S 272 34, 306 132" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="306" cy="132" r="4" fill="currentColor" />
        </svg>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-10 flex gap-4 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-300 ${currentSlide === i ? 'w-12 bg-gold' : 'w-6 bg-white/20'}`}
            />
          ))}
        </div>

        {/* Branding Accent - Vertical Text */}
        <div className="absolute right-0 bottom-32 rotate-90 origin-right hidden lg:block translate-x-[40%]">
           <span className="text-[10px] font-bold tracking-[1em] text-white/20 uppercase">REVOLUTIONIZING GOVERNANCE</span>
        </div>
      </section>

      {/* Catalogue Row - High Contrast (White Canvas) */}
      <section className="gsap-section bg-white py-24 px-6 border-b border-hairline">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h4 className="anime-reveal text-[10px] font-bold tracking-[0.3em] text-gold mb-6">THE CHALLENGE</h4>
            <h2 className="anime-reveal display-lg mb-8">Character is the currency of leadership.</h2>
            <p className="text-charcoal/60 leading-relaxed max-w-md">
              We face a crisis where technical skill often exists without an ethical compass. ACELIE is bridging this gap through character formation.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
             {[
               { icon: <Shield size={24} />, title: "Leadership Crisis", desc: "Character failure when given absolute power." },
               { icon: <Users size={24} />, title: "Youth Direction", desc: "Technical skill without an ethical foundation." }
             ].map((item, i) => (
               <div key={i} className="anime-hover bg-white p-10">
                 <div className="text-gold mb-6">{item.icon}</div>
                 <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                 <p className="text-sm text-charcoal/60">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="gsap-section grid grid-cols-2 md:grid-cols-4 h-[400px]">
        {[
          gallery1,
          gallery2,
          gallery3,
          gallery4
        ].map((img, i) => (
          <div key={i} className="gsap-image-drift overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
          </div>
        ))}
      </section>

      {/* Formal Programs Section - Structural Grid */}
      <section className="gsap-section bg-navy py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-end">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">CENTRE PROGRAMS</h4>
              <h2 className="display-lg text-white mb-10">Systemic education for <br className="hidden md:block" /> ethical maturity.</h2>
              <p className="text-white/60 body-lg max-w-xl">
                We integrate ethical leadership into the fabric of African education through four specialized development tracks designed for lifelong character growth.
              </p>
            </div>
            <div className="flex justify-end">
              <Link to="/programs" className="btn-outline border-white/20 text-white hover:bg-white hover:text-navy">
                EXPLORE ALL PROGRAMS
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Character Schools", desc: "Foundational character development for secondary students.", icon: <Book size={24} /> },
              { title: "Civic Excellence", desc: "Governance training for local and regional public leaders.", icon: <Shield size={24} /> },
              { title: "Innovation Labs", desc: "STEM maturity coupled with innovative problem solving.", icon: <Lightbulb size={24} /> },
              { title: "Entrepreneurship", desc: "Building sustainable business models on ethical pillars.", icon: <Users size={24} /> }
            ].map((p, i) => (
              <div key={i} className="anime-hover anime-reveal bg-navy p-12 hover:bg-white/5 transition-colors group">
                <div className="text-gold mb-12 transform transition-transform group-hover:scale-110 group-hover:rotate-3">{p.icon}</div>
                <h3 className="heading-lg text-white mb-6 uppercase leading-none">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formal Impact Section - Data Matrix */}
      <section className="gsap-section bg-white py-32 px-6 overflow-hidden border-b border-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
            <div className="lg:w-1/2">
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">STRATEGIC IMPACT</h4>
              <h2 className="display-lg text-navy mb-12">Measuring the revolution <br /> in character across regions.</h2>
              <div className="grid grid-cols-2 gap-12">
                <div className="p-8 border-l-2 border-navy/5">
                   <StatCounter target="12000+" label="Students Influenced" />
                </div>
                <div className="p-8 border-l-2 border-navy/5">
                   <StatCounter target="450+" label="Certified Mentors" />
                </div>
                <div className="p-8 border-l-2 border-navy/5">
                   <StatCounter target="15" label="Regional Hubs" />
                </div>
                <div className="p-8 border-l-2 border-navy/5">
                   <StatCounter target="92%" label="Ethics Retention Rate" />
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              <div className="aspect-[4/5] bg-navy relative overflow-hidden">
                <img 
                  src={impactBgImg} 
                  alt="Students learning" 
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-navy/40 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gold p-10 max-w-[280px]">
                <p className="text-navy font-bold text-lg leading-tight uppercase">"The first non-partisan hub of its kind in the region."</p>
                <div className="mt-4 text-[10px] font-bold tracking-widest text-navy/60">UNESCO REGIONAL AUDIT 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Row 2 */}
      <section className="gsap-section grid grid-cols-1 md:grid-cols-2 h-[500px]">
         <div className="gsap-image-drift relative overflow-hidden group">
            <img src={galleryRow2_1} className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors" />
         </div>
         <div className="gsap-image-drift relative overflow-hidden group">
            <img src={galleryRow2_2} className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors" />
         </div>
      </section>

      {/* Formal News Section - Institutional Media */}
      <section className="gsap-section bg-offwhite py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">INSTITUTIONAL JOURNAL</h4>
              <h2 className="display-lg text-navy">Latest Insights & Research</h2>
            </div>
            <Link to="/news" className="text-gold font-bold text-xs tracking-widest hover:underline uppercase flex items-center gap-2 pb-4">
              VISIT NEWSROOM <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                date: "OCT 12, 2025",
                title: "The Role of Ethical Resilience in Post-Industrial Economies",
                category: "RESEARCH PAPER",
                image: news1
              },
              {
                date: "SEP 28, 2025",
                title: "Kumbo Secondary Education Pilot: A Character Case Study",
                category: "CASE STUDY",
                image: news2
              },
              {
                date: "AUG 15, 2025",
                title: "Why Innovation Without Character is a Risk to Governance",
                category: "INSIGHT",
                image: news3
              }
            ].map((news, i) => (
              <Link key={i} to="/news" className="anime-hover anime-reveal group">
                <div className="bg-white border border-hairline group-hover:border-gold transition-colors h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={news.image} alt="" className="w-full h-full object-cover grayscale transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-12 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center mb-10">
                        <span className="text-[9px] font-bold text-gold tracking-widest uppercase">{news.category}</span>
                        <span className="text-[9px] font-bold text-navy/30 tracking-widest">{news.date}</span>
                      </div>
                      <h3 className="heading-md uppercase text-navy group-hover:text-gold transition-colors mb-20">{news.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-navy/40 uppercase tracking-widest group-hover:text-navy transition-colors">
                      Read Document <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Roadmap - Predictive Impact Section */}
      <section className="gsap-section bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">STRATEGIC PILLARS</h4>
            <h2 className="display-lg text-navy">Planned Continental Milestone Roadmap</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {[
              { 
                icon: <Globe size={24} />, 
                title: "Regional Expansion", 
                desc: "Scaling hub models to major economic zones in West and East Africa by 2027.",
                image: pillar1
              },
              { 
                icon: <Target size={24} />, 
                title: "Curriculum Integration", 
                desc: "Formal partnerships with national ministries for ethical leadership standardization.",
                image: pillar2
              },
              { 
                icon: <BarChart3 size={24} />, 
                title: "Character Index", 
                desc: "Launching Africa's first data-driven metric for institutional character maturity.",
                image: pillar3
              }
            ].map((p, i) => (
              <div key={i} className="anime-hover anime-reveal bg-white p-12 group hover:bg-offwhite transition-colors">
                <div className="h-40 bg-navy/5 overflow-hidden mb-10 grayscale group-hover:grayscale-0 transition-all">
                  <img src={p.image} alt="" className="w-full h-full object-cover opacity-50 group-hover:opacity-100" />
                </div>
                <div className="text-gold mb-6">{p.icon}</div>
                <h3 className="heading-md uppercase text-navy mb-6">{p.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Institutional Knowledge */}
      <section className="gsap-section bg-offwhite py-32 px-6 border-t border-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">
            <div>
              <h4 className="anime-reveal text-[10px] font-bold tracking-[0.4em] text-gold mb-8 uppercase">KNOWLEDGE HUB</h4>
              <h2 className="anime-reveal display-lg text-navy mb-8">Frequently Asked Questions</h2>
              <p className="anime-reveal text-charcoal/60 leading-relaxed max-w-sm">
                Transparent answers regarding our mission, operations, and how you can participate in the continental character revolution.
              </p>
            </div>
            <div className="anime-reveal">
              <GlideAccordion align="left" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Formal Resolution */}
      <section className="gsap-section bg-navy py-40 px-6 relative overflow-hidden">
        {/* Abstract structural line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-white/5" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/40 mb-12 uppercase">THE NEXT STEP</h4>
          <h2 className="display-xl text-white mb-16 uppercase">
            Transform your influence <br /> into <span className="text-gold">impactful</span> leadership.
          </h2>
          <p className="text-white/50 body-lg max-w-2xl mx-auto mb-20">
            Join a continental community of leaders who prioritize character over titles. Whether you are a student, teacher, or community leader, your journey starts here.
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
            <Link to="/get-involved" className="anime-hover bg-gold text-navy font-bold text-xs tracking-widest uppercase px-8 py-4 hover:brightness-95 transition-all w-fit text-center">
              GET INVOLVED
            </Link>
            <Link to="/contact" className="anime-hover border border-white/20 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-navy transition-all w-fit text-center">
              CONTACT HUB
            </Link>
          </div>
        </div>

        {/* Branding Floating Badge */}
        <div className="absolute bottom-10 left-10 hidden xl:block opacity-20">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em]">ACELIE</span>
            <span className="text-[8px] font-bold text-gold uppercase tracking-[0.3em]">EST. 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
