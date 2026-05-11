import { Facebook, FileText, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Share2, Twitter, User } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { useAnimePageMotion } from '../hooks/useAnimePageMotion';
import { secureFormSubmit } from '../lib/formSecurity';

// Import local images
import gallery1 from '../imgs/gallery-1.png';
import gallery2 from '../imgs/gallery-2.png';
import gallery3 from '../imgs/gallery-3.png';
import gallery4 from '../imgs/gallery-4.png';
import galleryRow2_2 from '../imgs/gallery-row2-2.png';

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Facebook', href: '#', icon: Facebook },
];

export default function Contact() {
  const pageMotionRef = useAnimePageMotion<HTMLDivElement>();

  return (
    <div ref={pageMotionRef} className="bg-offwhite">
      <PageHeader 
        title="Connect With The Hub"
        subtitle="We welcome inquiries about programs, institutional partnerships, and collaborative character research."
        image={galleryRow2_2}
        tagline="INSTITUTIONAL LIAISON"
      />

      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h4 className="anime-page-kicker anime-reveal text-[10px] font-bold tracking-[0.4em] text-gold mb-10 uppercase">CONTACT DETAILS</h4>
            <h1 className="anime-reveal display-lg mb-12 uppercase text-navy">
              Integrity is <br /> our first response.
            </h1>
            <p className="anime-reveal text-lg font-body text-charcoal/60 mb-16 leading-relaxed max-w-sm">
              Headquartered in Kumbo, Cameroon. Dedicated to transparency and direct institutional dialogue.
            </p>

            <div className="space-y-12">
              <div className="anime-hover anime-reveal flex gap-8 group">
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold mb-3 uppercase">PHYSICAL HUB</h4>
                  <p className="font-body text-[13px] text-navy font-bold tracking-tight">
                    ACELIE Centre, Kumbo,<br />Bui Division, Cameroon
                  </p>
                </div>
              </div>

              <div className="anime-hover anime-reveal flex gap-8 group">
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                  <Mail size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold mb-3 uppercase">GENERAL INQUIRIES</h4>
                  <p className="font-body text-[13px] text-navy font-bold tracking-tight">contact@acelie.org</p>
                  <p className="font-bold text-[9px] uppercase text-navy/30 mt-2 tracking-widest leading-none">INSTITUTIONAL CORRESPONDENCE ONLY</p>
                </div>
              </div>

              <div className="anime-hover anime-reveal flex gap-8 group">
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold mb-3 uppercase">PHONE LINE</h4>
                  <p className="font-body text-[13px] text-navy font-bold tracking-tight">+237 6XX XXX XXX</p>
                </div>
              </div>

              <div className="anime-hover anime-reveal flex gap-8 group">
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                  <Share2 size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gold mb-3 uppercase">DIGITAL NODES</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="flex items-center gap-3 border border-navy/10 px-4 py-3 text-navy transition hover:border-gold hover:text-gold"
                        >
                          <Icon size={17} strokeWidth={1.7} />
                          <span className="text-sm font-medium">{social.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="anime-hover anime-reveal bg-navy p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gold/40" />
            <div className="relative z-10">
              <h2 className="text-4xl text-white font-bold uppercase mb-12 tracking-tighter">Submit a Query</h2>
              <form className="contact-dark-form space-y-10 text-white" noValidate onSubmit={(event) => secureFormSubmit(event, 'Thank you. Your query has been checked and is ready for secure processing.')}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">Full Name</label>
                  <div className="flex items-center gap-3 border-b border-white/20 pb-4 focus-within:border-gold">
                    <User size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                    <input name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" className="form-field-control w-full bg-transparent outline-none placeholder:text-white/40" placeholder="Hon. Sarah Fai" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">Email Address</label>
                  <div className="flex items-center gap-3 border-b border-white/20 pb-4 focus-within:border-gold">
                    <Mail size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                    <input name="email" type="email" required maxLength={120} autoComplete="email" className="form-field-control w-full bg-transparent outline-none placeholder:text-white/40" placeholder="sarah@institute.org" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">Phone Number</label>
                  <div className="flex items-center gap-3 border-b border-white/20 pb-4 focus-within:border-gold">
                    <Phone size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                    <input name="phone" type="tel" required minLength={7} maxLength={24} autoComplete="tel" className="form-field-control w-full bg-transparent outline-none placeholder:text-white/40" placeholder="+237 6XX XXX XXX" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">Subject</label>
                  <div className="flex items-center gap-3 border-b border-white/20 pb-4 focus-within:border-gold">
                    <FileText size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
                    <input name="subject" type="text" required minLength={3} maxLength={120} className="form-field-control w-full bg-transparent outline-none placeholder:text-white/40" placeholder="Partnership Opportunity" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">Your Message</label>
                  <div className="flex items-start gap-3 border-b border-white/20 pb-4 focus-within:border-gold">
                    <MessageSquare size={18} className="mt-1 shrink-0 text-gold" strokeWidth={1.7} />
                    <textarea name="message" rows={4} required minLength={10} maxLength={1000} className="form-field-control w-full resize-none bg-transparent outline-none placeholder:text-white/40" placeholder="How can ACELIE support your journey?" />
                  </div>
                </div>
                <button type="submit" className="anime-hover flex w-full items-center justify-center gap-4 bg-gold px-8 py-6 text-sm font-bold uppercase tracking-[0.2em] text-navy transition hover:brightness-95">
                  Send Formal Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break Strip */}
      <section className="h-[400px] grid grid-cols-2 lg:grid-cols-4 bg-hairline">
         {[
           gallery1,
           gallery2,
           gallery3,
           gallery4
         ].map((img, i) => (
           <div key={i} className="anime-hover anime-reveal overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <img src={img} alt="" className="w-full h-full object-cover" />
           </div>
         ))}
      </section>

      <section className="bg-white py-40 px-6 border-b border-hairline relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <MapPin size={64} className="anime-reveal text-gold mb-10 opacity-20" />
           <h2 className="anime-reveal text-4xl font-bold uppercase text-navy mb-8 tracking-tighter">Kumbo, Bui Division</h2>
           <p className="anime-reveal text-navy/40 font-bold text-[10px] uppercase tracking-widest mb-16">Institutional Ground Zero</p>
           
           <div className="anime-hover anime-reveal w-full aspect-video min-h-[360px] overflow-hidden bg-offwhite border border-hairline">
              <iframe
                title="ACELIE location map - Kumbo, Cameroon"
                src="https://www.google.com/maps?q=Kumbo%2C%20Bui%20Division%2C%20Cameroon&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
           </div>
        </div>
      </section>
    </div>
  );
}


