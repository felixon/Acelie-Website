import { BarChart3, CheckCircle, Cpu, Globe, Heart, ShieldCheck, Target, Users, Zap } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { useAnimePageMotion } from '../hooks/useAnimePageMotion';

import hero1 from '../imgs/hero-1.png';
import gallery1 from '../imgs/gallery-1.png';
import gallery2 from '../imgs/gallery-2.png';
import gallery3 from '../imgs/gallery-3.png';
import gallery4 from '../imgs/gallery-4.png';
import news2 from '../imgs/news-2.png';
import impactBgImg from '../imgs/impact-bg.png';

interface Objective {
  number: string;
  title: string;
  summary: string;
  activities: string[];
  results: string[];
  icon: typeof ShieldCheck;
  image: string;
  metric: string;
}

const objectives: Objective[] = [
  {
    number: '01',
    title: 'Leadership Development',
    summary: 'Build ethical leadership behavior through school clubs, academies, mentorship, and community workshops.',
    icon: ShieldCheck,
    image: gallery1,
    metric: '35K',
    activities: ['Leadership academies', 'School leadership clubs', 'Mentorship circles'],
    results: ['Ethical leadership culture', 'Youth participation', 'Community role models'],
  },
  {
    number: '02',
    title: 'STEM & Innovation',
    summary: 'Pair digital skill with character formation so innovation becomes useful, local, and responsible.',
    icon: Cpu,
    image: gallery2,
    metric: '80%',
    activities: ['STEM clubs', 'Digital literacy', 'Robotics challenges'],
    results: ['Tech interest growth', 'Girls in STEM', 'Local solutions'],
  },
  {
    number: '03',
    title: 'Entrepreneurship',
    summary: 'Support sustainable businesses shaped by accountability, service, and community value.',
    icon: Zap,
    image: gallery3,
    metric: '120',
    activities: ['Business incubation', 'Financial literacy', 'Startup support'],
    results: ['New small businesses', 'Income growth', 'Rural employment'],
  },
  {
    number: '04',
    title: 'Future Skills',
    summary: 'Give children practical confidence through creativity, life skills, school support, and protection awareness.',
    icon: Heart,
    image: news2,
    metric: '9K',
    activities: ['Life skills labs', 'Creativity camps', 'Child protection'],
    results: ['Confident learners', 'Soft-skill growth', 'Better readiness'],
  },
  {
    number: '05',
    title: 'Community Impact',
    summary: 'Strengthen local cohesion through peacebuilding, inclusion, gender equity, and community innovation.',
    icon: Globe,
    image: gallery4,
    metric: '18',
    activities: ['Peacebuilding', 'Gender advocacy', 'Inclusion support'],
    results: ['Community cohesion', 'Sustainable projects', 'Lower conflict risk'],
  },
];

const themes = ['Gender Equality', 'Youth Empowerment', 'Disability Inclusion', 'Peacebuilding', 'Sustainability', 'Digital Transformation', 'Accountability'];

const reach = [
  { label: 'Community Leaders', value: '96%' },
  { label: 'Young Professionals', value: '88%' },
  { label: 'Teachers & Administrators', value: '80%' },
  { label: 'University Students', value: '72%' },
  { label: 'Secondary Students', value: '64%' },
  { label: 'Primary Children', value: '54%' },
];

const outcomes = [
  'Responsible entrepreneurship culture',
  'Youth-led ethical innovation',
  'Stronger civic engagement',
  'Sustainable leadership pipeline',
  'Improved institutional governance',
  'Lower corruption tolerance',
];

const ObjectiveCard = ({ objective }: { objective: Objective; key?: any }) => {
  const Icon = objective.icon;

  return (
    <article className="anime-hover anime-reveal group overflow-hidden border border-hairline bg-white">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[1fr_220px]">
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <div className="mb-10 flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-navy text-gold">
                  <Icon size={24} strokeWidth={1.4} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold">Objective {objective.number}</span>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold leading-none text-navy">{objective.metric}</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-navy/35">Target Signal</div>
              </div>
            </div>

            <h3 className="mb-6 max-w-xl text-3xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-4xl">
              {objective.title}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-charcoal/62">{objective.summary}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-hairline pt-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Actions</h4>
              <ul className="space-y-3">
                {objective.activities.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Results</h4>
              <ul className="space-y-3">
                {objective.results.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal/65">
                    <CheckCircle className="mt-0.5 shrink-0 text-forest" size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative min-h-[260px] overflow-hidden bg-navy lg:min-h-full">
          <img src={objective.image} alt="" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-navy/35 mix-blend-multiply" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/20 pt-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/60">ACELIE</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-gold">2030</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Impact() {
  const pageMotionRef = useAnimePageMotion<HTMLDivElement>();

  return (
    <div ref={pageMotionRef} className="bg-offwhite">
      <PageHeader
        title="Impact Intelligence"
        subtitle="A sharper view of our 2026-2030 strategy: who we reach, what we build, and which institutional signals we track."
        image={hero1}
        tagline="STRATEGIC DIRECTION"
      />

      <section className="bg-white px-6 py-16 border-b border-hairline">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white p-8 md:p-12">
            <div className="anime-page-kicker anime-reveal mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Live Strategy Board
            </div>
            <h2 className="anime-reveal mb-8 max-w-3xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-6xl">
              Modern impact needs visible signals.
            </h2>
            <p className="anime-reveal max-w-2xl text-base leading-relaxed text-charcoal/65">
              This page frames ACELIE's work like an operating dashboard: objectives, reach, outcomes, and cross-cutting themes in one fast scan.
            </p>
            <svg className="anime-reveal mt-10 h-20 w-full max-w-xl text-gold/70" viewBox="0 0 520 90" fill="none" aria-hidden="true">
              <path className="anime-draw-path" d="M4 70 C 90 10, 132 88, 216 38 S 344 8, 410 52 S 488 76, 516 20" stroke="currentColor" strokeWidth="2" />
              <circle cx="516" cy="20" r="4" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-px bg-hairline">
            {[
              { value: '2026', label: 'Launch Window', icon: Target },
              { value: '05', label: 'Core Objectives', icon: BarChart3 },
              { value: '07', label: 'Cross Themes', icon: Users },
              { value: '2030', label: 'Assessment Goal', icon: CheckCircle },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="anime-hover anime-reveal bg-offwhite p-7">
                  <Icon size={20} className="mb-8 text-gold" />
                  <div className="text-4xl font-bold leading-none text-navy">{stat.value}</div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal/45">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 py-14 border-b border-hairline">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {themes.map((theme) => (
            <span key={theme} className="anime-hover anime-reveal border border-navy/10 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-navy transition-colors hover:border-gold hover:text-gold">
              {theme}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h4 className="anime-reveal mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Objective System</h4>
              <h2 className="anime-reveal max-w-3xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">
                Five tracks, one governance outcome.
              </h2>
            </div>
            <p className="anime-reveal max-w-md text-sm leading-relaxed text-charcoal/55">
              Compact cards keep actions, outputs, and visual evidence together so each objective feels accountable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {objectives.map((objective) => (
              <ObjectiveCard key={objective.number} objective={objective} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-6 py-28">
        <div className="absolute inset-0 opacity-12">
          <img src={impactBgImg} alt="" className="h-full w-full object-cover grayscale" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <h4 className="anime-page-kicker anime-reveal mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Reach Map</h4>
            <h2 className="anime-reveal mb-8 text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white md:text-5xl">
              Stakeholder depth without visual clutter.
            </h2>
            <p className="anime-reveal max-w-md text-sm leading-relaxed text-white/55">
              The new structure reads like a progression map instead of a pyramid, giving the page a cleaner and more current feel.
            </p>
          </div>

          <div className="space-y-5">
            {reach.map((group) => (
              <div key={group.label} className="anime-reveal">
                <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.24em]">
                  <span className="text-white/68">{group.label}</span>
                  <span className="text-gold">{group.value}</span>
                </div>
                <div className="h-3 overflow-hidden bg-white/10">
                  <div className="h-full bg-gold" style={{ width: group.value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h4 className="anime-reveal mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Outcome Matrix</h4>
            <h2 className="anime-reveal text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">
              What long-term change should feel like.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <div key={outcome} className="anime-hover anime-reveal group bg-offwhite p-9 transition-colors hover:bg-white">
                <div className="mb-16 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Signal {String(index + 1).padStart(2, '0')}</span>
                  <CheckCircle size={20} className="text-forest transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold uppercase leading-[0.95] tracking-tight text-navy">{outcome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
