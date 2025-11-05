import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/cc5fcbdc-cfac-420d-8ec8-e4089988afec/files/89e284b4-04d6-437c-8ce7-b82c87924ef7.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary leading-tight">
            Чуть не потерял её
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-light">
            Короткометражный анимационный фильм
          </p>
          <p className="text-lg text-accent mb-12 italic">
            История о механическом сердце и мгновениях, которые нас определяют
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Смотреть трейлер
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              <Icon name="Download" className="mr-2" size={24} />
              Пресс-кит
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-accent opacity-60" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl font-bold mb-6 text-primary">О фильме</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                В захламлённой мастерской, где время остановилось среди шестерёнок и пожелтевших чертежей, 
                маленький робот переживает момент, который изменит всё. Одна искра. Один вздох. 
                Одно мгновение между потерей и обретением.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Этот фильм — медитация о хрупкости существования, о том, как мы держимся за самое важное, 
                и о том механическом чуде, которое мы называем надеждой.
              </p>
              <div className="flex gap-6 text-sm text-accent">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  <span>3 мин 45 сек</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  <span>2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Film" size={20} />
                  <span>2K DCP</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://cdn.poehali.dev/projects/cc5fcbdc-cfac-420d-8ec8-e4089988afec/files/1902ce9f-e8ca-4ca0-85cf-54b62aab37f2.jpg"
                alt="Кадр из фильма"
                className="relative rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-primary">Визуальный стиль</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="Palette" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Гибридная анимация</h3>
              <p className="text-muted-foreground leading-relaxed">
                Уникальное сочетание 2D и 3D техник с мягкими текстурами кисти создаёт тактильное, 
                почти осязаемое ощущение каждого кадра.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Icon name="Lightbulb" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Вольфрамовое освещение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Тёплое практичное освещение сверху контрастирует с прохладным оконным светом, 
                создавая баланс уюта и ожидания.
              </p>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Icon name="Sparkles" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Акварельная текстура</h3>
              <p className="text-muted-foreground leading-relaxed">
                Живописные текстуры и тонкая акварельная окраска придают каждой сцене характер 
                сборника рассказов середины 2000-х.
              </p>
            </Card>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/cc5fcbdc-cfac-420d-8ec8-e4089988afec/files/5ba61892-90b5-402c-b89f-419bc73b2b60.jpg"
              alt="Мастерская"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end p-12">
              <div>
                <h3 className="text-3xl font-bold mb-2">Кинематографический подход</h3>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  35-мм виртуальный объектив, малая глубина резкости и размытие движения 
                  создают ощущение реалистичной анимации в замедленной съёмке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-primary">Техническая информация</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-accent">Производство</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border/30">
                  <span className="text-muted-foreground">Формат</span>
                  <span className="font-semibold">2K DCP, ProRes 4444</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/30">
                  <span className="text-muted-foreground">Соотношение сторон</span>
                  <span className="font-semibold">16:9</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/30">
                  <span className="text-muted-foreground">Звук</span>
                  <span className="font-semibold">5.1 Surround</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/30">
                  <span className="text-muted-foreground">Язык</span>
                  <span className="font-semibold">Русский (без диалогов)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border/30">
                  <span className="text-muted-foreground">Продолжительность</span>
                  <span className="font-semibold">3:45</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-accent">Награды и показы</h3>
              <div className="space-y-6">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-4">
                    <Icon name="Award" size={28} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Готов к фестивалям</h4>
                      <p className="text-muted-foreground text-sm">
                        Фильм готов к участию в анимационных и короткометражных фестивалях по всему миру
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-secondary/5 border-secondary/20">
                  <div className="flex items-start gap-4">
                    <Icon name="Users" size={28} className="text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Целевая аудитория</h4>
                      <p className="text-muted-foreground text-sm">
                        Фестивали анимации, кинематографические смотры, любители авторской анимации
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-accent/5 border-accent/20">
                  <div className="flex items-start gap-4">
                    <Icon name="Globe" size={28} className="text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Международный потенциал</h4>
                      <p className="text-muted-foreground text-sm">
                        Визуальное повествование без языковых барьеров
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8 text-primary">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Заинтересованы в показе фильма на вашем фестивале или мероприятии? 
            Хотите обсудить дистрибуцию или сотрудничество?
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              <Icon name="Mail" className="mr-2" size={24} />
              Написать нам
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              <Icon name="FileText" className="mr-2" size={24} />
              Скачать EPK
            </Button>
          </div>

          <div className="flex gap-6 justify-center text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={28} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={28} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/30">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 "Чуть не потерял её". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
