import { ArrowRight, Building2, CheckCircle, CircleDollarSign, Handshake, HeartHandshake, ListChecks, Mail, MessageSquare, Phone, ShieldCheck, Sparkles, User, Users } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { useAnimePageMotion } from '../hooks/useAnimePageMotion';
import { secureFormSubmit } from '../lib/formSecurity';

import hero1 from '../imgs/hero-1.png';
import hero3 from '../imgs/hero-3.png';
import galleryRow2_1 from '../imgs/gallery-row2-1.png';
import story1 from '../imgs/about/story-1.jpg';
import valService from '../imgs/about/val-service.jpg';

const pathways = [
  {
    icon: Users,
    title: 'Become a Member',
    label: 'Individual',
    desc: 'Join a values-aligned network of leaders committed to self-governance, service, and institutional integrity.',
    cta: 'Apply for membership',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    label: 'Institution',
    desc: 'Bring ACELIE leadership formation into schools, universities, ministries, and civic development programs.',
    cta: 'Start partnership',
  },
  {
    icon: HeartHandshake,
    title: 'Volunteer',
    label: 'Specialist',
    desc: 'Contribute expertise in STEM, education, research, entrepreneurship, policy, operations, or mentorship.',
    cta: 'Offer expertise',
  },
  {
    icon: CircleDollarSign,
    title: 'Support Work',
    label: 'Resource',
    desc: 'Fund learning labs, mentor pipelines, field programs, and the infrastructure of ethical leadership.',
    cta: 'Support programs',
  },
];

const privileges = [
  'General assembly participation',
  'ACELIE journal access',
  'Mentorship inclusion',
  'Program network collateral',
  'Institutional updates',
  'Regional hub opportunities',
];

const steps = [
  { step: '01', title: 'Declare Intent', desc: 'Tell us who you are and the pathway that fits your contribution.' },
  { step: '02', title: 'Values Review', desc: 'Applications are assessed for alignment with ACELIE principles and goals.' },
  { step: '03', title: 'Activation', desc: 'Approved members and partners join the relevant program or working circle.' },
];

const PathwayCard = ({ pathway, index }: { pathway: (typeof pathways)[number]; index: number; key?: any }) => {
  const Icon = pathway.icon;

  return (
    <a
      href="#form"
      className="anime-hover anime-reveal group flex min-h-[360px] flex-col justify-between border border-hairline bg-white p-8 transition-colors hover:border-gold"
    >
      <div>
        <div className="mb-12 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center bg-navy text-gold">
            <Icon size={26} strokeWidth={1.4} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/30">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">{pathway.label}</div>
        <h3 className="mb-6 text-3xl font-bold uppercase leading-[0.9] tracking-tight text-navy">{pathway.title}</h3>
        <p className="text-sm leading-relaxed text-charcoal/60">{pathway.desc}</p>
      </div>
      <div className="mt-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold transition-all group-hover:gap-5">
        {pathway.cta} <ArrowRight size={14} />
      </div>
    </a>
  );
};

export default function GetInvolved() {
  const pageMotionRef = useAnimePageMotion<HTMLDivElement>();

  return (
    <div ref={pageMotionRef} className="bg-offwhite">
      <PageHeader
        title="Join The Revolution"
        subtitle="ACELIE is a collaborative platform for people and institutions who believe character is the first infrastructure of continental progress."
        image={hero1}
        tagline="FORCE MULTIPLICATION"
      />

      <section className="border-b border-hairline bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white p-8 md:p-12">
            <div className="anime-page-kicker anime-reveal mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Participation Hub
            </div>
            <h2 className="anime-reveal mb-8 max-w-3xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-6xl">
              Choose how your influence enters the work.
            </h2>
            <p className="anime-reveal max-w-2xl text-base leading-relaxed text-charcoal/65">
              Members, partners, volunteers, and supporters each connect to the same mission: ethical leadership at institutional scale.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-hairline">
            {[
              { value: '04', label: 'Entry Paths', icon: Sparkles },
              { value: '08', label: 'Core Values', icon: ShieldCheck },
              { value: '01', label: 'Shared Mission', icon: CheckCircle },
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="anime-reveal">
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Field Evidence</h4>
            <h2 className="max-w-2xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">
              People first. Then programs become infrastructure.
            </h2>
          </div>

          <div className="grid grid-cols-[0.9fr_1.1fr] gap-4">
            <div className="space-y-4">
              <div className="anime-hover anime-reveal relative h-44 overflow-hidden bg-navy">
                <img src={story1} alt="" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
                <div className="absolute inset-0 bg-navy/35 mix-blend-multiply" />
                <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">Mentorship</span>
              </div>
              <div className="anime-hover anime-reveal relative h-44 overflow-hidden bg-navy">
                <img src={galleryRow2_1} alt="" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
                <div className="absolute inset-0 bg-navy/35 mix-blend-multiply" />
                <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">Community</span>
              </div>
            </div>
            <div className="anime-hover anime-reveal relative min-h-[368px] overflow-hidden bg-navy">
              <img src={hero3} alt="" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
              <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6 right-6 border-t border-white/25 pt-5">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Youth Leadership</div>
                <p className="max-w-sm text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white">
                  Collaboration gives the mission a human face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h4 className="anime-reveal mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Engagement Paths</h4>
              <h2 className="anime-reveal max-w-3xl text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">
                Four ways to move from belief to action.
              </h2>
            </div>
            <p className="anime-reveal max-w-md text-sm leading-relaxed text-charcoal/55">
              Cleaner cards, faster scanning, no visual noise. Motion carries the energy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pathway, index) => (
              <PathwayCard key={pathway.title} pathway={pathway} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1fr_0.75fr] lg:items-stretch">
          <div>
            <h4 className="anime-page-kicker anime-reveal mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Membership Logic</h4>
            <h2 className="anime-reveal mb-10 text-4xl font-bold uppercase leading-[0.9] tracking-tight text-navy md:text-5xl">
              To belong is to commit. To lead is to serve.
            </h2>
            <p className="anime-reveal max-w-xl text-sm leading-relaxed text-charcoal/65">
              Membership is open to individuals and corporate bodies who want to see an ethical Africa realized through practical formation, not slogans.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {privileges.map((privilege) => (
              <div key={privilege} className="anime-hover anime-reveal flex items-center gap-4 bg-offwhite p-6 transition-colors hover:bg-white">
                <CheckCircle size={18} className="shrink-0 text-forest" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy">{privilege}</span>
              </div>
            ))}
          </div>

          <div className="anime-hover anime-reveal relative min-h-[360px] overflow-hidden bg-navy">
            <img src={valService} alt="" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
            <div className="absolute inset-0 bg-navy/45 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Service Culture</div>
              <p className="max-w-xs text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white">
                The work becomes real when people serve together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <h4 className="anime-reveal mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Activation Flow</h4>
            <h2 className="anime-reveal max-w-md text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white md:text-5xl">
              Simple path. Serious standards.
            </h2>
            <p className="anime-reveal mt-8 max-w-sm text-sm leading-relaxed text-white/55">
              Short sequence, clear responsibility, no ceremony for ceremony's sake.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {steps.map((item) => (
              <div key={item.step} className="anime-hover anime-reveal grid grid-cols-[80px_1fr] gap-6 border border-white/12 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                <div className="flex h-16 w-16 items-center justify-center bg-white/5 text-2xl font-bold text-gold">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white">{item.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="border-t border-white/10 bg-[#1A2A5E] px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch overflow-hidden border border-white/10">
          <div className="anime-reveal relative p-12 lg:p-16 flex flex-col justify-end bg-navy overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src={valService} alt="" className="h-full w-full object-cover grayscale opacity-20" />
              <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
            </div>
            <div className="relative z-10">
              <h4 className="anime-reveal mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gold">Expression Of Interest</h4>
              <h2 className="anime-reveal mb-0 text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white md:text-5xl">
                Start the right conversation.
              </h2>
            </div>
          </div>

          <form className="light-form anime-reveal grid grid-cols-1 gap-8 bg-white p-8 md:grid-cols-2 md:p-16" noValidate onSubmit={(event) => secureFormSubmit(event, 'Thank you. Your expression of interest has been checked and is ready for secure processing.')}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-navy/60">Full Name</label>
              <div className="flex items-center gap-3 border-b border-hairline pb-4 focus-within:border-gold">
                <User size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                <input name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" className="form-field-control w-full bg-transparent text-navy outline-none placeholder:text-navy/25" placeholder="e.g. Sarah Fai" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-navy/60">Email Address</label>
              <div className="flex items-center gap-3 border-b border-hairline pb-4 focus-within:border-gold">
                <Mail size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                <input name="email" type="email" required maxLength={120} autoComplete="email" className="form-field-control w-full bg-transparent text-navy outline-none placeholder:text-navy/25" placeholder="e.g. sarah@example.com" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-navy/60">Phone Number</label>
              <div className="flex items-center gap-3 border-b border-hairline pb-4 focus-within:border-gold">
                <Phone size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                <input name="phone" type="tel" required minLength={7} maxLength={24} autoComplete="tel" className="form-field-control w-full bg-transparent text-navy outline-none placeholder:text-navy/25" placeholder="+237 6XX XXX XXX" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-navy/60">Organization</label>
              <div className="flex items-center gap-3 border-b border-hairline pb-4 focus-within:border-gold">
                <Building2 size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                <input name="organization" type="text" maxLength={120} className="form-field-control w-full bg-transparent text-navy outline-none placeholder:text-navy/25" placeholder="University of Kumbo" />
              </div>
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-navy/60">Involvement Type</label>
              <div className="flex items-center gap-3 border-b border-hairline pb-4 focus-within:border-gold">
                <ListChecks size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                <select name="involvementType" required className="form-field-control w-full cursor-pointer appearance-none bg-white text-navy outline-none">
                  <option value="member">Become a Member</option>
                  <option value="partner">Institutional Partner</option>
                  <option value="volunteer">Volunteer Specialist</option>
                  <option value="donor">Financial Supporter</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-navy/60">Message</label>
              <div className="flex items-start gap-3 border-b border-hairline pb-4 focus-within:border-gold">
                <MessageSquare size={18} className="mt-1 shrink-0 text-gold" strokeWidth={1.7} />
                <textarea name="message" rows={4} required minLength={10} maxLength={1000} className="form-field-control w-full resize-none bg-transparent text-navy outline-none placeholder:text-navy/25" placeholder="Tell us about your background..." />
              </div>
            </div>
            <div className="pt-6 md:col-span-2">
              <button type="submit" className="anime-hover flex w-full items-center justify-center gap-4 bg-gold px-8 py-6 text-sm font-bold uppercase tracking-[0.25em] text-navy transition hover:brightness-95">
                Submit Expression <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

