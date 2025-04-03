import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ language, toggleLanguage }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.portfolio'), path: '/portfolio' },
    { name: t('navigation.contact'), path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-accent">
          FabioFapi
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-1 rounded-md border border-gray-700 hover:border-accent transition-colors"
          >
            <span className={language === 'en' ? 'text-accent' : 'text-text-secondary'}>EN</span>
            <span>/</span>
            <span className={language === 'it' ? 'text-accent' : 'text-text-secondary'}>IT</span>
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-text p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary"
          >
            <div className="container mx-auto py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `block py-2 ${
                        isActive ? 'text-accent' : 'text-text-secondary'
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-700">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 py-2"
                  >
                    <span className={language === 'en' ? 'text-accent' : 'text-text-secondary'}>
                      English
                    </span>
                    <span>/</span>
                    <span className={language === 'it' ? 'text-accent' : 'text-text-secondary'}>
                      Italiano
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;