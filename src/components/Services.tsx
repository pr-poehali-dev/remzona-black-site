import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Settings',
    title: 'Диагностика',
    desc: 'Компьютерная диагностика всех систем автомобиля. Выявим неисправности до того, как они станут проблемой.',
    price: 'от 500 ₽',
    tag: 'Популярно',
  },
  {
    icon: 'Gauge',
    title: 'Техническое обслуживание',
    desc: 'Замена масла, фильтров, технических жидкостей. Все работы по регламенту производителя.',
    price: 'от 1 500 ₽',
    tag: null,
  },
  {
    icon: 'Disc',
    title: 'Тормозная система',
    desc: 'Замена колодок, дисков, барабанов, суппортов. Профессиональная прокачка тормозов.',
    price: 'от 2 000 ₽',
    tag: null,
  },
  {
    icon: 'Zap',
    title: 'Электрика',
    desc: 'Ремонт электропроводки, замена АКБ, стартера, генератора. Устранение любых электрических неисправностей.',
    price: 'от 800 ₽',
    tag: null,
  },
  {
    icon: 'RotateCw',
    title: 'Подвеска и рулевое',
    desc: 'Замена амортизаторов, рычагов, наконечников, шаровых. Регулировка развала-схождения.',
    price: 'от 1 200 ₽',
    tag: null,
  },
  {
    icon: 'Flame',
    title: 'Двигатель',
    desc: 'Капитальный и текущий ремонт двигателей. Замена ГРМ, прокладок, цепей и ремней.',
    price: 'от 5 000 ₽',
    tag: 'Сложные работы',
  },
  {
    icon: 'Wind',
    title: 'Кондиционер',
    desc: 'Заправка, чистка, ремонт систем кондиционирования. Работаем со всеми типами хладагентов.',
    price: 'от 1 800 ₽',
    tag: null,
  },
];

export default function Services() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-rz-black relative">
      <div className="absolute inset-0 stripe-pattern opacity-50" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-rz-red" />
            <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">Что мы делаем</span>
          </div>
          <h2 className="rz-heading text-4xl md:text-5xl text-rz-white mb-4">
            Наши услуги
          </h2>
          <p className="text-rz-gray max-w-xl text-base leading-relaxed">
            Полный спектр услуг по ремонту и обслуживанию автомобилей. Работаем со всеми марками.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`rz-card card-hover-glow group cursor-pointer transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={handleBooking}
            >
              {s.tag && (
                <div className="absolute top-4 right-4 text-[10px] font-oswald uppercase tracking-wider px-2 py-1 bg-rz-red text-white">
                  {s.tag}
                </div>
              )}

              <div className="w-12 h-12 border border-rz-border group-hover:border-rz-red flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-rz-red/10">
                <Icon name={s.icon} size={22} className="text-rz-red" />
              </div>

              <h3 className="font-oswald font-semibold uppercase text-lg text-rz-white mb-2 tracking-wide">
                {s.title}
              </h3>
              <p className="text-rz-gray text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-rz-border">
                <span className="font-oswald text-rz-red font-semibold">{s.price}</span>
                <Icon name="ArrowRight" size={16} className="text-rz-gray group-hover:text-rz-red group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button onClick={handleBooking} className="rz-btn-primary">
            Записаться на сервис
          </button>
        </div>
      </div>
    </section>
  );
}