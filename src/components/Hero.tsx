import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/4422c20a-3f05-4ef8-987f-42ec8c83c936/files/ac655597-f302-49a9-8a05-f4d3d14061f9.jpg';

const stats = [
  { value: '12+', label: 'лет опыта' },
  { value: '3500+', label: 'довольных клиентов' },
  { value: '98%', label: 'выполненных работ' },
  { value: '24/7', label: 'поддержка' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Автосервис Рем Зона"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rz-black via-rz-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-rz-black via-transparent to-rz-black/40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern z-0 opacity-50" />

      {/* Red accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-rz-red to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="h-px w-12 bg-rz-red" />
            <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">
              Профессиональный автосервис · Цимлянск
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-oswald font-bold uppercase text-5xl md:text-7xl xl:text-8xl leading-none mb-6 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-rz-white">Ремонт</span>
            <span className="block text-rz-white">который</span>
            <span className="block text-rz-red red-glow">работает</span>
          </h1>

          {/* Description */}
          <p
            className={`text-rz-gray-light text-lg md:text-xl leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Диагностика, ремонт, техническое обслуживание любых марок автомобилей.
            Гарантия качества на все виды работ.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => handleScroll('#booking')}
              className="rz-btn-primary flex items-center gap-3 animate-glow-pulse"
            >
              <Icon name="CalendarCheck" size={18} />
              Записаться на ремонт
            </button>
            <button
              onClick={() => handleScroll('#services')}
              className="rz-btn-outline flex items-center gap-3"
            >
              <Icon name="ChevronRight" size={18} />
              Наши услуги
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="h-px w-8 bg-rz-red mb-3" />
                <span className="font-oswald font-bold text-3xl text-rz-white leading-none mb-1">
                  {s.value}
                </span>
                <span className="text-rz-gray text-xs uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-rz-gray text-xs uppercase tracking-widest font-oswald">
          Прокрути вниз
        </span>
        <Icon name="ChevronDown" size={20} className="text-rz-red" />
      </div>

      {/* Diagonal accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden z-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-rz-red/10 rotate-45 translate-x-32 translate-y-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 border border-rz-red/10 rotate-45 translate-x-24 translate-y-24" />
      </div>
    </section>
  );
}
