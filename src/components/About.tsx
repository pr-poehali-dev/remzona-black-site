import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const advantages = [
  { icon: 'Award', title: 'Гарантия на работы', desc: 'Даём письменную гарантию на все виды ремонта от 6 месяцев до 2 лет' },
  { icon: 'Users', title: 'Опытные мастера', desc: 'Каждый механик имеет стаж не менее 7 лет и регулярно проходит обучение' },
  { icon: 'Package', title: 'Оригинальные запчасти', desc: 'Работаем только с проверенными поставщиками. Предоставляем документы на запчасти' },
  { icon: 'Clock', title: 'Точные сроки', desc: 'Соблюдаем договорённые сроки ремонта. При задержке — скидка на следующее ТО' },
];

const team = [
  { name: 'Алексей Романов', role: 'Главный механик', exp: '15 лет' },
  { name: 'Дмитрий Волков', role: 'Электрик', exp: '10 лет' },
  { name: 'Сергей Попов', role: 'Кузовщик', exp: '12 лет' },
  { name: 'Андрей Крылов', role: 'Мастер диагностики', exp: '8 лет' },
];

export default function About() {
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

  return (
    <section id="about" className="section-padding bg-rz-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 border border-rz-red/5 rotate-12" />
        <div className="absolute top-32 right-32 w-72 h-72 border border-rz-red/5 rotate-45" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-rz-red" />
              <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">О нас</span>
            </div>
            <h2 className="rz-heading text-4xl md:text-5xl text-rz-white mb-6">
              О сервисе<br />
              <span className="text-rz-red">Рем Зона</span>
            </h2>
            <p className="text-rz-gray-light leading-relaxed mb-6">
              Автосервис «Рем Зона» работает в Цимлянске с 2012 года. За это время мы выполнили
              более 3500 ремонтов и завоевали репутацию самого надёжного сервиса в городе.
            </p>
            <p className="text-rz-gray leading-relaxed mb-8">
              Мы специализируемся на полном комплексном обслуживании автомобилей — от простой замены масла
              до капитального ремонта двигателя. Современное оборудование и профессиональная команда
              позволяют нам браться за любые задачи.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-oswald font-bold text-4xl text-rz-red">2012</span>
                <span className="text-rz-gray text-xs uppercase tracking-widest">год основания</span>
              </div>
              <div className="w-px h-12 bg-rz-border" />
              <div className="flex flex-col">
                <span className="font-oswald font-bold text-4xl text-rz-white">4</span>
                <span className="text-rz-gray text-xs uppercase tracking-widest">подъёмника</span>
              </div>
              <div className="w-px h-12 bg-rz-border" />
              <div className="flex flex-col">
                <span className="font-oswald font-bold text-4xl text-rz-white">8</span>
                <span className="text-rz-gray text-xs uppercase tracking-widest">мастеров</span>
              </div>
            </div>
          </div>

          {/* Right — advantages */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {advantages.map((a) => (
              <div key={a.title} className="rz-card card-hover-glow group">
                <div className="w-10 h-10 bg-rz-red/10 border border-rz-red/30 flex items-center justify-center mb-4 group-hover:bg-rz-red/20 transition-colors">
                  <Icon name={a.icon} size={18} className="text-rz-red" />
                </div>
                <h3 className="font-oswald font-semibold uppercase text-sm text-rz-white mb-2 tracking-wide leading-tight">
                  {a.title}
                </h3>
                <p className="text-rz-gray text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-oswald font-bold uppercase text-2xl text-rz-white tracking-wide">
              Наша команда
            </h3>
            <div className="flex-1 h-px bg-rz-border" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="rz-card text-center group card-hover-glow"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-rz-border mx-auto mb-4 flex items-center justify-center group-hover:bg-rz-red/10 transition-colors">
                  <Icon name="User" size={28} className="text-rz-gray group-hover:text-rz-red transition-colors" />
                </div>
                <h4 className="font-oswald font-semibold text-sm text-rz-white uppercase tracking-wide mb-1 leading-tight">
                  {member.name}
                </h4>
                <p className="text-rz-red text-xs font-oswald uppercase tracking-widest mb-2">{member.role}</p>
                <p className="text-rz-gray text-xs">Стаж: {member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
