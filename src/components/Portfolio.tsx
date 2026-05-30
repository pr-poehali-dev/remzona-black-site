import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const works = [
  {
    title: 'Капитальный ремонт двигателя',
    car: 'Toyota Camry 2018',
    category: 'Двигатель',
    result: 'Заменены все прокладки, восстановлена компрессия. Пробег после ремонта — 50 000 км',
    time: '3 дня',
  },
  {
    title: 'Полная диагностика и ТО',
    car: 'BMW 3 Series 2020',
    category: 'ТО',
    result: 'Выявлено 4 скрытые неисправности. Проведено полное обслуживание по регламенту',
    time: '1 день',
  },
  {
    title: 'Ремонт подвески',
    car: 'Nissan X-Trail 2019',
    category: 'Подвеска',
    result: 'Заменены все амортизаторы, рычаги и стойки стабилизатора. Развал-схождение',
    time: '2 дня',
  },
  {
    title: 'Электрика и сигнализация',
    car: 'Lada Vesta 2021',
    category: 'Электрика',
    result: 'Устранено короткое замыкание, установлена охранная система с GSM-модулем',
    time: '1 день',
  },
  {
    title: 'Кузовной ремонт',
    car: 'Hyundai Solaris 2022',
    category: 'Кузов',
    result: 'Устранены последствия ДТП — рихтовка, покраска двух элементов, подбор цвета',
    time: '4 дня',
  },
  {
    title: 'Ремонт тормозов',
    car: 'Kia Rio 2020',
    category: 'Тормоза',
    result: 'Замена передних и задних колодок, проточка дисков, прокачка тормозной системы',
    time: '4 часа',
  },
];

const categories = ['Все', 'Двигатель', 'ТО', 'Подвеска', 'Электрика', 'Кузов', 'Тормоза'];

const categoryColors: Record<string, string> = {
  'Двигатель': 'bg-red-900/30 text-red-400',
  'ТО': 'bg-zinc-800 text-zinc-400',
  'Подвеска': 'bg-zinc-800 text-zinc-400',
  'Электрика': 'bg-zinc-800 text-zinc-400',
  'Кузов': 'bg-zinc-800 text-zinc-400',
  'Тормоза': 'bg-zinc-800 text-zinc-400',
};

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Все');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === 'Все'
    ? works
    : works.filter(w => w.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-rz-dark relative">
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-rz-red" />
            <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">Наши работы</span>
          </div>
          <h2 className="rz-heading text-4xl md:text-5xl text-rz-white mb-4">Портфолио</h2>
          <p className="text-rz-gray max-w-xl text-base leading-relaxed">
            Реальные примеры выполненных работ. Каждый ремонт — это история возвращённого автомобиля к жизни.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-oswald uppercase tracking-widest text-xs px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-rz-red border-rz-red text-white'
                  : 'border-rz-border text-rz-gray hover:border-rz-red hover:text-rz-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((w, i) => (
            <div
              key={w.title}
              className={`rz-card card-hover-glow group transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <span className={`text-[10px] font-oswald uppercase tracking-wider px-2 py-1 ${categoryColors[w.category] || 'bg-zinc-800 text-zinc-400'}`}>
                  {w.category}
                </span>
                <span className="flex items-center gap-1 text-rz-gray text-xs">
                  <Icon name="Clock" size={12} />
                  {w.time}
                </span>
              </div>

              {/* Car */}
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Car" size={14} className="text-rz-red flex-shrink-0" />
                <span className="font-oswald text-rz-gray-light text-sm uppercase tracking-wide">{w.car}</span>
              </div>

              <h3 className="font-oswald font-semibold text-xl text-rz-white mb-3 uppercase tracking-wide leading-tight">
                {w.title}
              </h3>

              <p className="text-rz-gray text-sm leading-relaxed">
                {w.result}
              </p>

              <div className="mt-4 pt-4 border-t border-rz-border flex items-center gap-2">
                <Icon name="CheckCircle" size={14} className="text-rz-red" />
                <span className="text-rz-red text-xs font-oswald uppercase tracking-widest">Выполнено</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
