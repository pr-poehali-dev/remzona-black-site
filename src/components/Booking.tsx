import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const serviceOptions = [
  'Диагностика', 'Техническое обслуживание', 'Ремонт двигателя',
  'Подвеска и рулевое', 'Тормозная система', 'Электрика',
  'Кондиционер', 'Кузовные работы', 'Другое',
];

export default function Booking() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', car: '', service: '', date: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding bg-rz-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-rz-red to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-rz-red" />
              <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">Онлайн запись</span>
            </div>
            <h2 className="rz-heading text-4xl md:text-5xl text-rz-white mb-6">
              Записаться<br />на сервис
            </h2>
            <p className="text-rz-gray-light leading-relaxed mb-10">
              Оставьте заявку и мы свяжемся с вами в течение 30 минут для подтверждения записи.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: 'MapPin', label: 'Адрес', value: 'г. Цимлянск, ул. Гагарина, 42' },
                { icon: 'Phone', label: 'Телефон', value: '8 (800) 123-45-67' },
                { icon: 'Clock', label: 'Режим работы', value: 'Пн–Сб: 8:00 – 20:00, Вс: 9:00 – 18:00' },
                { icon: 'MessageCircle', label: 'WhatsApp/Telegram', value: '+7 (928) 123-45-67' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rz-red/10 border border-rz-red/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} size={16} className="text-rz-red" />
                  </div>
                  <div>
                    <div className="font-oswald uppercase text-xs tracking-widest text-rz-gray mb-1">{item.label}</div>
                    <div className="text-rz-white text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {submitted ? (
              <div className="rz-card text-center py-16 animate-scale-in">
                <div className="w-16 h-16 bg-rz-red/10 border border-rz-red flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={32} className="text-rz-red" />
                </div>
                <h3 className="font-oswald font-bold text-2xl text-rz-white uppercase mb-3">Заявка отправлена!</h3>
                <p className="text-rz-gray max-w-sm mx-auto text-sm leading-relaxed">
                  Мы перезвоним вам в течение 30 минут для подтверждения записи.
                </p>
                <button
                  className="rz-btn-outline mt-8 text-xs"
                  onClick={() => setSubmitted(false)}
                >
                  Записаться ещё раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rz-card">
                <h3 className="font-oswald font-bold text-xl text-rz-white uppercase tracking-wide mb-6">
                  Форма записи
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-rz-gray text-xs font-oswald uppercase tracking-wider mb-2">Ваше имя *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Иван Иванов"
                        className="w-full bg-rz-dark border border-rz-border text-rz-white px-4 py-3 text-sm focus:outline-none focus:border-rz-red transition-colors placeholder:text-rz-gray/50"
                      />
                    </div>
                    <div>
                      <label className="block text-rz-gray text-xs font-oswald uppercase tracking-wider mb-2">Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-rz-dark border border-rz-border text-rz-white px-4 py-3 text-sm focus:outline-none focus:border-rz-red transition-colors placeholder:text-rz-gray/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-rz-gray text-xs font-oswald uppercase tracking-wider mb-2">Марка и модель авто</label>
                    <input
                      type="text"
                      name="car"
                      value={form.car}
                      onChange={handleChange}
                      placeholder="Toyota Camry 2020"
                      className="w-full bg-rz-dark border border-rz-border text-rz-white px-4 py-3 text-sm focus:outline-none focus:border-rz-red transition-colors placeholder:text-rz-gray/50"
                    />
                  </div>

                  <div>
                    <label className="block text-rz-gray text-xs font-oswald uppercase tracking-wider mb-2">Вид работ</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-rz-dark border border-rz-border text-rz-white px-4 py-3 text-sm focus:outline-none focus:border-rz-red transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Выберите услугу</option>
                      {serviceOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-rz-gray text-xs font-oswald uppercase tracking-wider mb-2">Желаемая дата</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-rz-dark border border-rz-border text-rz-white px-4 py-3 text-sm focus:outline-none focus:border-rz-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-rz-gray text-xs font-oswald uppercase tracking-wider mb-2">Описание проблемы</label>
                    <textarea
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Опишите проблему или пожелания..."
                      className="w-full bg-rz-dark border border-rz-border text-rz-white px-4 py-3 text-sm focus:outline-none focus:border-rz-red transition-colors resize-none placeholder:text-rz-gray/50"
                    />
                  </div>

                  <button type="submit" className="rz-btn-primary w-full flex items-center justify-center gap-3">
                    <Icon name="CalendarCheck" size={18} />
                    Отправить заявку
                  </button>

                  <p className="text-rz-gray text-xs text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
