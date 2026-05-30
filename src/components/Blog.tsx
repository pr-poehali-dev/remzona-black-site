import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const posts = [
  {
    category: 'Советы',
    date: '15 мая 2026',
    title: 'Как понять, что пора менять масло раньше регламента',
    excerpt: 'Производители рекомендуют менять масло каждые 10 000–15 000 км. Но есть ситуации, когда это нужно делать раньше...',
    readTime: '4 мин',
  },
  {
    category: 'Диагностика',
    date: '8 мая 2026',
    title: '5 звуков, которые нельзя игнорировать при езде',
    excerpt: 'Автомобиль часто "говорит" о своих проблемах звуками. Скрип, стук, свист — каждый из них может сигнализировать о серьёзной неисправности...',
    readTime: '6 мин',
  },
  {
    category: 'Подготовка к сезону',
    date: '1 мая 2026',
    title: 'Подготовка авто к лету: полный чеклист',
    excerpt: 'С приходом тепла автомобиль нуждается в особом внимании. Мы собрали полный список того, что нужно проверить и заменить...',
    readTime: '5 мин',
  },
  {
    category: 'Экономия',
    date: '22 апреля 2026',
    title: 'Как сэкономить на обслуживании авто без ущерба для качества',
    excerpt: 'Существует несколько законных способов снизить расходы на содержание автомобиля. Рассказываем о самых эффективных...',
    readTime: '7 мин',
  },
  {
    category: 'Советы',
    date: '10 апреля 2026',
    title: 'Зачем нужна компьютерная диагностика даже если всё в порядке',
    excerpt: 'Многие владельцы авто обращаются к диагностике только когда что-то сломалось. Но профилактическая диагностика способна...',
    readTime: '3 мин',
  },
  {
    category: 'Тормоза',
    date: '5 апреля 2026',
    title: 'Когда менять тормозные колодки: все признаки и нормы износа',
    excerpt: 'Тормозная система — самое важное в безопасности автомобиля. Рассказываем, как понять, что колодки уже пора менять...',
    readTime: '5 мин',
  },
];

const categoryBadgeColors: Record<string, string> = {
  'Советы': 'text-emerald-400 bg-emerald-950/50',
  'Диагностика': 'text-blue-400 bg-blue-950/50',
  'Подготовка к сезону': 'text-amber-400 bg-amber-950/50',
  'Экономия': 'text-violet-400 bg-violet-950/50',
  'Тормоза': 'text-rz-red bg-red-950/50',
};

export default function Blog() {
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
    <section id="blog" className="section-padding bg-rz-black relative">
      <div className="absolute inset-0 stripe-pattern opacity-30" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-rz-red" />
              <span className="font-oswald uppercase tracking-[0.3em] text-rz-red text-xs">Полезное</span>
            </div>
            <h2 className="rz-heading text-4xl md:text-5xl text-rz-white mb-3">Блог</h2>
            <p className="text-rz-gray max-w-xl text-base leading-relaxed">
              Советы по уходу за автомобилем, новости автопрома и полезные инструкции от наших мастеров.
            </p>
          </div>
        </div>

        {/* Featured post */}
        <div className={`mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rz-card card-hover-glow group cursor-pointer md:flex gap-8 items-start">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] font-oswald uppercase tracking-wider px-2 py-1 ${categoryBadgeColors[posts[0].category] || 'text-rz-gray bg-rz-border'}`}>
                  {posts[0].category}
                </span>
                <span className="text-rz-gray text-xs flex items-center gap-1">
                  <Icon name="Clock" size={11} /> {posts[0].readTime}
                </span>
              </div>
              <h3 className="font-oswald font-bold text-2xl md:text-3xl text-rz-white uppercase tracking-wide leading-tight mb-4 group-hover:text-rz-red transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-rz-gray leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-3 text-rz-red">
                <span className="font-oswald uppercase text-xs tracking-widest">Читать далее</span>
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="md:w-1/2 bg-rz-dark border border-rz-border h-48 md:h-full min-h-[200px] flex items-center justify-center">
              <Icon name="BookOpen" size={48} className="text-rz-border" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(1).map((post, i) => (
            <div
              key={post.title}
              className={`rz-card card-hover-glow group cursor-pointer transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-oswald uppercase tracking-wider px-2 py-1 ${categoryBadgeColors[post.category] || 'text-rz-gray bg-rz-border'}`}>
                  {post.category}
                </span>
                <span className="text-rz-gray text-xs">{post.date}</span>
              </div>
              <h3 className="font-oswald font-semibold text-lg text-rz-white uppercase tracking-wide leading-tight mb-3 group-hover:text-rz-red transition-colors">
                {post.title}
              </h3>
              <p className="text-rz-gray text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-rz-border">
                <span className="text-rz-gray text-xs flex items-center gap-1">
                  <Icon name="Clock" size={11} /> {post.readTime}
                </span>
                <div className="flex items-center gap-2 text-rz-red">
                  <span className="font-oswald uppercase text-xs tracking-widest">Читать</span>
                  <Icon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
