import { useState } from 'react';
import { ArrowRight, BookOpen, Check, Cpu, FileSearch, GraduationCap, Layers, Target, Users } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { useAnimePageMotion } from '../hooks/useAnimePageMotion';

import hero1 from '../imgs/hero-1.png';
import gallery1 from '../imgs/gallery-1.png';
import gallery2 from '../imgs/gallery-2.png';
import gallery3 from '../imgs/gallery-3.png';
import news2 from '../imgs/news-2.png';
import pillar2 from '../imgs/pillar-2.png';
import pillar3 from '../imgs/pillar-3.png';

interface Program {
  icon: typeof GraduationCap;
  title: string;
  label: string;
  body: string;
  activities: string[];
  target: string;
  image: string;
  signal: string;
}

const programs: Program[] = [
  {
    icon: GraduationCap,
    title: 'Model Leadership Schools',
    label: 'K-12 Formation',
    body: 'Institutionalizing leadership as a core subject from nursery to secondary levels, where character development carries the same weight as academic excellence.',
    image: news2,
    signal: '01',
    activities: ['Leadership curriculum for K-12', 'Innovation labs inside schools', 'Student-led entrepreneurship projects', 'Student governance with accountability'],
    target: 'Nursery, primary, and secondary schools',
  },
  {
    icon: BookOpen,
    title: 'Teacher Training',
    label: 'Mentor Pipeline',
    body: 'Equipping teachers and administrators with practical tools for ethical leadership instruction, assessment, and mentorship.',
    image: pillar2,
    signal: '02',
    activities: ['Teacher leadership certification', 'Curriculum design with ministries', 'Train-the-trainer programs', 'Education innovation summits'],
    target: 'Teachers, facilitators, and administrators',
  },
  {
    icon: Users,
    title: 'Youth Academies',
    label: 'Civic Practice',
    body: 'Intensive learning systems for bootcamps, mentorship, simulations, and real-world leadership practice.',
    image: gallery1,
    signal: '03',
    activities: ['Regional leadership bootcamps', 'Governance simulations', 'Social innovation pitch days', 'Professional mentorship pairs'],
    target: 'University students and young professionals',
  },
  {
    icon: Cpu,
    title: 'STEM Innovation',
    label: 'Digital Readiness',
    body: 'Building technical literacy for the digital economy while keeping ethics at the center of innovation.',
    image: gallery2,
    signal: '04',
    activities: ['Robotics and AI clubs', 'Digital literacy workshops', 'Girls in STEM programs', 'Science and innovation competitions'],
    target: 'Ages 6-24, with focus on innovation hubs',
  },
  {
    icon: FileSearch,
    title: 'Research & Policy',
    label: 'System Reform',
    body: 'Producing evidence on leadership behavior and advocating for leadership education as a national priority.',
    image: pillar3,
    signal: '05',
    activities: ['Leadership behavior journal', 'Policy recommendations', 'Curriculum reform campaigns', 'Community governance surveys'],
    target: 'Policy makers, institutions, and the public',
  },
];

const horizon = [
  { year: '2026', title: 'Model Launch', desc: 'Pilot leadership schools in Kumbo and the North-West region.' },
  { year: '2027', title: 'STEM Expansion', desc: 'Digital innovation labs across partner primary institutions.' },
  { year: '2028', title: 'Regional Hubs', desc: 'Youth academies in two major African economic zones.' },
  { year: '2029', title: 'Policy Reform', desc: 'Formal leadership education recommendations for curricula.' },
  { year: '2030', title: 'Impact Review', desc: 'Five-year measurement of character and innovation outcomes.' },
];

const ProgramCard = ({ program, active, onSelect }: { program: Program; active: boolean; onSelect: () => void; key?: any }) => {
  const Icon = program.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`anime-hover anime-reveal group grid min-h-[104px] grid-cols-[56px_1fr_auto] items-center gap-4 border p-4 text-left transition-colors md:p-5 ${
        active ? 'border-gold bg-navy text-white shadow-xl shadow-navy/10' : 'border-hairline bg-white text-navy hover:border-gold hover:bg-offwhite'
      }`}
    >
      <div className={`flex h-14 w-14 items-center justify-center ${active ? 'bg-gold text-navy' : 'bg-white text-gold ring-1 ring-hairline'}`}>
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.28em] text-gold">{program.label}</div>
        <h3 className={`text-lg font-bold uppercase leading-[0.95] tracking-tight md:text-xl ${active ? 'text-white' : 'text-navy'}`}>{program.title}</h3>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${active ? 'text-gold' : 'text-navy/35'}`}>
        {program.signal}
      </span>
    </button>
  );
};

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pageMotionRef = useAnimePageMotion<HTMLDivElement>();
  const activeProgram = programs[activeIndex];
  const ActiveIcon = activeProgram.icon;

  return (
    <div ref={pageMotionRef} className="bg-offwhite">
      <PageHeader
        title="Program Operating System"
        subtitle="A modern view of ACELIE's education model: five tracks that move character, innovation, and civic responsibility from idea to practice."
        image={hero1}
        tagline="SYSTEMIC METHODOLOGY"
      />

      <section className="border-b border-hairline bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-white p-8 md:p-12">
            <div className="anime-page-kicker anime-reveal mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Program Console
            </div>
            <h2 className="anime-reveal mb-8 max-w-3xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-6xl">
              Practical pathways, not passive training.
            </h2>
            <p className="anime-reveal max-w-2xl text-base leading-relaxed text-charcoal/65">
              Each track moves from classroom formation to field practice, with clear audiences, activities, and institutional outcomes.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-hairline">
            {[
              { value: '05', label: 'Tracks', icon: Layers },
              { value: 'K-24', label: 'Learning Span', icon: GraduationCap },
              { value: '2030', label: 'Horizon', icon: Target },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="anime-hover anime-reveal bg-offwhite p-7">
                  <Icon size={20} className="mb-10 text-gold" />
                  <div className="text-3xl font-bold leading-none text-navy md:text-4xl">{stat.value}</div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-charcoal/45">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
            <div>
              <h4 className="anime-reveal mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Select A Track</h4>
              <h2 className="anime-reveal max-w-3xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl lg:text-6xl">
                Program tracks built for action.
              </h2>
            </div>
            <p className="anime-reveal text-sm leading-relaxed text-charcoal/58 md:text-base">
              Choose a track and the detail panel updates instantly. Compact controls keep desktop sharp and mobile readable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {programs.map((program, index) => (
                <ProgramCard
                  key={program.title}
                  program={program}
                  active={index === activeIndex}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="anime-reveal overflow-hidden border border-hairline bg-white shadow-sm">
              <div className="relative h-56 overflow-hidden bg-navy md:h-72">
                <img src={activeProgram.image} alt="" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
                <div className="absolute inset-0 bg-navy/45 mix-blend-multiply" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
                  <div>
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{activeProgram.label}</div>
                    <h3 className="max-w-2xl text-3xl font-bold uppercase leading-[0.9] tracking-tight text-white md:text-5xl">
                      {activeProgram.title}
                    </h3>
                  </div>
                  <div className="hidden border border-white/20 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 sm:block">
                    Track {activeProgram.signal}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px bg-hairline lg:grid-cols-[1fr_0.88fr]">
                <div className="bg-white p-7 md:p-9">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-navy text-gold">
                        <ActiveIcon size={26} strokeWidth={1.4} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Program Intent</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/35">Track {activeProgram.signal}</div>
                    </div>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed text-charcoal/68">{activeProgram.body}</p>
                </div>

                <div className="bg-offwhite p-7 md:p-9">
                  <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Key Activities</h4>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {activeProgram.activities.map((activity) => (
                      <li key={activity} className="flex gap-3 text-sm leading-snug text-charcoal/68">
                        <Check size={15} className="mt-0.5 shrink-0 text-forest" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-hairline pt-6">
                    <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Stakeholder Focus</h4>
                    <p className="text-xl font-bold uppercase leading-[0.95] tracking-tight text-navy md:text-2xl">{activeProgram.target}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h4 className="anime-page-kicker anime-reveal mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Strategic Horizon</h4>
            <h2 className="anime-reveal text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">
              2026-2030 rollout rhythm.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-5">
            {horizon.map((item, index) => (
              <div key={item.year} className="anime-hover anime-reveal bg-offwhite p-7 transition-colors hover:bg-white">
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-3xl font-bold leading-none text-navy">{item.year}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-5 text-xl font-bold uppercase leading-[0.95] tracking-tight text-navy">{item.title}</h3>
                <p className="text-xs leading-relaxed text-charcoal/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-6 py-28 text-center">
        <div className="absolute inset-0 opacity-15">
          <img src={gallery3} alt="" className="h-full w-full object-cover grayscale" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="anime-reveal mb-12 text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
            Programs are not just about learning. They are about becoming.
          </p>
          <a href="/contact" className="anime-hover inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-navy transition hover:brightness-95">
            Request Curriculum Details <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
