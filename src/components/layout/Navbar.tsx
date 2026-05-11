import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 h-[64px] flex items-center border-b ${
        (scrolled || isOpen)
          ? 'bg-navy border-hairline-dark' 
          : 'bg-navy border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 grid grid-cols-2 lg:grid-cols-[200px_1fr_200px] items-center">
        {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo size={36} showText={true} />
          </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center justify-center gap-5">
          {NavLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link text-white/70 hover:text-white transition-colors py-2 whitespace-nowrap ${
                location.pathname === link.path ? 'text-white after:w-full' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center justify-self-end">
          <Link to="/get-involved" className="hidden lg:block btn-primary px-5 py-2 text-[12px] normal-case">
            Get involved
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[64px] bg-navy z-40 lg:hidden flex flex-col p-6 gap-6"
          >
            {NavLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-base font-normal text-white border-b border-white/10 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/get-involved" className="btn-primary w-full text-center py-5 mt-4 normal-case">
              Get involved
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
