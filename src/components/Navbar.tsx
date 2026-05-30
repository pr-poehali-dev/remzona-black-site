import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'О сервисе', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Запись', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-rz-black/95 backdrop-blur-md border-b border-rz-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 bg-rz-red flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 bg-rz-red-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon name="Wrench" size={16} className="text-white relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-oswald font-bold text-xl uppercase tracking-wider text-rz-white leading-none">
              Рем<span className="text-rz-red"> Зона</span>
            </span>
            <span className="text-[9px] font-roboto text-rz-gray tracking-[0.2em] uppercase">
              Автосервис · Цимлянск
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="flex items-center gap-4">
          <a href="tel:+79188935629" className="hidden md:flex items-center gap-2 text-rz-red font-oswald text-sm uppercase tracking-widest hover:text-rz-red-bright transition-colors">
            <Icon name="Phone" size={14} />
            <span>8 (918) 893-56-29</span>
          </a>
          <button
            onClick={() => handleNavClick('#booking')}
            className="hidden md:block rz-btn-primary text-xs py-2.5 px-5"
          >
            Записаться
          </button>
          <button
            className="lg:hidden text-rz-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-rz-dark border-t border-rz-border">
          <nav className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link py-3 text-left border-b border-rz-border/50 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+79188935629" className="flex items-center gap-2 text-rz-red font-oswald text-sm uppercase tracking-widest mt-4">
              <Icon name="Phone" size={14} />
              <span>8 (918) 893-56-29</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}