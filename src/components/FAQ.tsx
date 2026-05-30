import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    q: 'Как записаться на ремонт?',
    a: 'Заполните форму на сайте, позвоните по телефону 8 (800) 123-45-67 или напишите в WhatsApp/Telegram. Мы подтвердим запись в течение 30 минут.',
  },
  {
    q: 'Какие марки автомобилей вы обслуживаете?',
    a: 'Мы работаем со всеми марками и моделями автомобилей — как отечественных, так и иностранных производителей. Легковые, кроссоверы, минивэны.',
  },
  {
    q: 'Даёте ли вы гарантию на работы?',
    a: 'Да, мы даём письменную гарантию на все виды работ. Гарантийный срок зависит от вида ремонта: от 6 месяцев на сложные кузовные работы до 2 лет на замену запчастей.',
  },
  {
    q: 'Сколько времени займёт ремонт?',
    a: 'Срок ремонта зависит от его сложности. Простое ТО — 2–4 часа, диагностика — 1–2 часа, капитальный ремонт двигателя — 3–5 дней. Точные сроки сообщим после диагностики.',
  },
  {
    q: 'Можно ли оставить машину на ночь?',
    a: 'Да, у нас есть охраняемая стоянка. Мы принимаем автомобили на ночное хранение — это удобно при длительных ремонтах.',
  },
  {
    q: 'Используете ли вы оригинальные запчасти?',
    a: 'Мы работаем с оригинальными запчастями и сертифицированными аналогами OEM-качества. Вы сами выбираете тип деталей с учётом цены и гарантии. На все запчасти предоставляем документы.',
  },
  {
    q: 'Есть ли скидки для постоянных клиентов?',
    a: 'Да! После третьего обращения вы получаете карту постоянного клиента со скидкой 10% на все работы. Для пенсионеров и многодетных семей — скидка 15%.',
  },
  {
    q: 'Как оплатить ремонт?',
    a: 'Принимаем наличные, банковские карты (Visa, MasterCard, МИР), переводы по QR-коду. Для юридических лиц возможна оплата по счёту с НДС.',
  },
];

export default function FAQ() {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section id="faq" className="section-padding bg-rz-dark relative">
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-rz-red" />
              <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">Вопросы и ответы</span>
            </div>
            <h2 className="rz-heading text-4xl md:text-5xl text-rz-white mb-6">
              Часто<br />задаваемые<br />
              <span className="text-rz-red">вопросы</span>
            </h2>
            <p className="text-rz-gray leading-relaxed mb-8">
              Здесь собраны ответы на самые популярные вопросы о нашем сервисе.
              Если не нашли ответ — звоните, мы всегда готовы помочь.
            </p>

            <div className="space-y-4">
              <a href="tel:+78001234567" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-rz-red/10 border border-rz-red/30 flex items-center justify-center group-hover:bg-rz-red transition-all duration-300">
                  <Icon name="Phone" size={18} className="text-rz-red group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-rz-gray text-xs font-oswald uppercase tracking-widest mb-0.5">Позвонить</div>
                  <div className="text-rz-white font-oswald font-semibold">8 (800) 123-45-67</div>
                </div>
              </a>
              <div className="h-px bg-rz-border" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rz-red/10 border border-rz-red/30 flex items-center justify-center">
                  <Icon name="MapPin" size={18} className="text-rz-red" />
                </div>
                <div>
                  <div className="text-rz-gray text-xs font-oswald uppercase tracking-widest mb-0.5">Адрес</div>
                  <div className="text-rz-white font-oswald font-semibold">г. Цимлянск, ул. Гагарина, 42</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border transition-all duration-300 ${
                    openIndex === i ? 'border-rz-red bg-rz-card' : 'border-rz-border bg-rz-card hover:border-rz-red/50'
                  }`}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className={`font-oswald uppercase tracking-wide text-sm leading-snug transition-colors ${
                      openIndex === i ? 'text-rz-red' : 'text-rz-white'
                    }`}>
                      {faq.q}
                    </span>
                    <Icon
                      name={openIndex === i ? 'Minus' : 'Plus'}
                      size={16}
                      className={`flex-shrink-0 mt-0.5 transition-colors ${openIndex === i ? 'text-rz-red' : 'text-rz-gray'}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-5">
                      <p className="text-rz-gray text-sm leading-relaxed border-t border-rz-border pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
