import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Logo from './Logo';

const institutionLinks = [
  ['About us', '/about'],
  ['Strategic plan', '/impact'],
  ['Get involved', '/get-involved'],
  ['News and insights', '/news'],
];

const leadershipLinks = [
  ['Character labs', '/programs'],
  ['Teacher training', '/programs'],
  ['STEM maturity', '/programs'],
  ['Policy change', '/programs'],
];

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Email', href: 'mailto:contact@acelie.org', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="surface-dark border-t border-hairline-dark pt-24 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] mb-20">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <Logo size={48} showText={true} />
          </Link>
          <p className="text-sm font-light text-white/62 leading-relaxed mb-8">
            Raising Ethical Leaders. Inspiring Innovation. Empowering Entrepreneurs. A continental intellectual movement redefining governance through individual character.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition hover:border-gold hover:text-gold"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.32em] text-white/38 mb-8 uppercase">Institution</h4>
          <ul className="space-y-4 text-sm font-normal tracking-normal text-white/72">
            {institutionLinks.map(([label, path]) => (
              <li key={label}>
                <Link to={path} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.32em] text-white/38 mb-8 uppercase">Leadership</h4>
          <ul className="space-y-4 text-sm font-normal tracking-normal text-white/72">
            {leadershipLinks.map(([label, path]) => (
              <li key={label}>
                <Link to={path} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.32em] text-white/38 mb-8 uppercase">Headquarters</h4>
          <div className="space-y-5 text-[13px] text-white/70">
            <div className="flex gap-4">
              <MapPin size={18} className="mt-1 shrink-0 text-gold" strokeWidth={1.7} />
              <div className="leading-relaxed">
              <p>Kumbo, Bui Division</p>
              <p>North-West Region, Cameroon</p>
              </div>
            </div>
            <a href="mailto:contact@acelie.org" className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold">
              <Mail size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
              <span>contact@acelie.org</span>
            </a>
            <a href="tel:+2376XXXXXXXX" className="flex items-center gap-4 text-white/80 transition-colors hover:text-gold">
              <Phone size={18} className="shrink-0 text-gold" strokeWidth={1.7} />
              <span>+237 6XX XXX XXX</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 pt-8 border-t border-hairline-dark flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-normal tracking-[0.08em] text-white/35 text-center">
        <p>© 2026 ACELIE - African Centre for Ethical Leadership, Innovation & Entrepreneurship.</p>
        <p>Revolution in character</p>
      </div>
    </footer>
  );
}
