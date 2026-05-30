import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'О сервисе', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Запись', href: '#booking' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-rz-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => handleNav('#hero')} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rz-red flex items-center justify-center">
                <Icon name="Wrench" size={18} className="text-white" />
              </div>
              <div>
                <span className="font-oswald font-bold text-2xl uppercase tracking-wider text-rz-white">
                  Рем<span className="text-rz-red"> Зона</span>
                </span>
                <div className="text-[10px] font-roboto text-rz-gray tracking-[0.2em] uppercase">
                  Автосервис · Цимлянск
                </div>
              </div>
            </button>
            <p className="text-rz-gray text-sm leading-relaxed max-w-sm mb-6">
              Профессиональный автосервис в Цимлянске. Более 12 лет опыта, гарантия на все работы,
              современное оборудование.
            </p>
            <div className="flex items-center gap-3">
              {['MessageCircle', 'Phone', 'Star'].map(icon => (
                <div
                  key={icon}
                  className="w-9 h-9 border border-rz-border flex items-center justify-center cursor-pointer hover:border-rz-red hover:bg-rz-red/10 transition-all duration-300"
                >
                  <Icon name={icon} size={15} className="text-rz-gray hover:text-rz-red" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-oswald uppercase text-sm tracking-widest text-rz-white mb-5">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-rz-gray text-sm hover:text-rz-red transition-colors font-roboto flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-rz-border group-hover:bg-rz-red group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-oswald uppercase text-sm tracking-widest text-rz-white mb-5">Контакты</h4>
            <div className="space-y-4">
              {[
                { icon: 'MapPin', text: 'г. Цимлянск,\nул. Красноармейская, 89/88' },
                { icon: 'Phone', text: '8 (918) 893-56-29' },
                { icon: 'Clock', text: 'Пн–Сб: 8:00–20:00\nВс: 9:00–18:00' },
              ].map(item => (
                <div key={item.icon} className="flex items-start gap-3">
                  <Icon name={item.icon} size={14} className="text-rz-red mt-0.5 flex-shrink-0" />
                  <span className="text-rz-gray text-sm leading-relaxed whitespace-pre-line">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-rz-border">
          <p className="text-rz-gray text-xs">
            © 2026 Рем Зона. Все права защищены.
          </p>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-rz-red rounded-full animate-pulse" />
            <span className="text-rz-gray text-xs">Принимаем заявки</span>
          </div>
          <p className="text-rz-gray text-xs">
            г. Цимлянск, Ростовская область
          </p>
        </div>
      </div>
    </footer>
  );
}