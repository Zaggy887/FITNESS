import { Apple, Dumbbell, LayoutDashboard, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    image: '/app-dashboard-2026.png',
    title: 'A daily plan students can understand at a glance.',
    description: 'Readiness, today’s priorities, habits, training and busy-period support come together in one clear home screen.',
    points: ['Daily progress checklist', 'Readiness and habit overview', 'Today’s training plan', 'Plan Around Your Life'],
  },
  {
    id: 'workout',
    label: 'Workout',
    icon: Dumbbell,
    image: '/app-workout-2026.png',
    title: 'Guided training without the cost of a personal trainer.',
    description: 'Students receive a structured plan, exercise guidance, live workout tracking and flexible alternatives for shorter days.',
    points: ['Personalised programs', 'Exercise form guidance', 'Set, rep and progress logging', '12-minute bodyweight sessions'],
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    icon: Apple,
    image: '/app-nutrition-2026.png',
    title: 'Food education that fits student budgets and routines.',
    description: 'The app focuses on practical choices and health literacy rather than perfection, rigid meal plans or confusing rules.',
    points: ['Daily nutrition check-ins', 'Budget-friendly recipes', 'Balanced meal education', 'Vegan and dietary options'],
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: TrendingUp,
    image: '/app-progress-2026.png',
    title: 'Progress students can actually see and learn from.',
    description: 'Training, strength, habits, sleep, steps and weight trends are presented together so improvement feels visible and motivating.',
    points: ['Customisable progress metrics', 'Strength and workout trends', 'Habit consistency', 'Clear goals and streaks'],
  },
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    image: '/app-community-2026.png',
    title: 'A healthier campus feels easier when people do it together.',
    description: 'Students can connect through university, residence and society groups rather than a generic global fitness feed.',
    points: ['Campus and society groups', 'Challenges and leaderboards', 'Training partner matching', 'Events and shared wins'],
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = screens[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-[#101012] py-20 text-white sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Inside the app</p>
          <h2 className="section-heading mt-4">Built to feel useful every day, not impressive once.</h2>
          <p className="section-copy mx-auto mt-5">Each part of the platform has a clear role in helping students make healthier choices independently.</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden">
          {screens.map(({ id, label, icon: Icon }, index) => (
            <button
              key={id}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              className={`inline-flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                activeIndex === index ? 'bg-[#7ED957] text-[#0A0A0B]' : 'border border-white/[0.08] bg-white/[0.04] text-white/55 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="relative mx-auto w-[min(78vw,280px)] sm:w-[295px] lg:w-[320px]">
            <div className="absolute inset-10 rounded-full bg-[#7ED957]/10 blur-[80px]" />
            <div className="relative overflow-hidden rounded-[2.6rem] border border-white/15 bg-[#0A0A0B] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.65)]">
              <div className="aspect-[9/19.5] overflow-hidden rounded-[2.2rem] bg-black">
                {screens.map((screen, index) => (
                  <img
                    key={screen.id}
                    src={screen.image}
                    alt={`${screen.label} screen in StrengthHub Online`}
                    className={`${index === activeIndex ? 'block' : 'hidden'} h-full w-full object-contain object-top`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7ED957]/20 bg-[#7ED957]/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#9FE264]">
              <ActiveIcon className="h-4 w-4" /> {active.label}
            </div>
            <h3 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">{active.title}</h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">{active.description}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {active.points.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#121214] px-4 py-3.5 text-sm font-semibold text-white/[0.72]">
                  <span className="h-2 w-2 rounded-full bg-[#7ED957]" /> {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
