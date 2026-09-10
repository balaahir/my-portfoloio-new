type AccentColor = 'emerald' | 'orange' | 'blue' | 'violet' | 'teal' | 'amber';

const accentMap: Record<AccentColor, { bg: string; bgLight: string; text: string; solid: string; gradient: string }> = {
  emerald: {
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-100 dark:bg-emerald-900/40',
    text: 'text-emerald-600 dark:text-emerald-400',
    solid: 'bg-emerald-500',
    gradient: 'from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-900/10',
  },
  orange: {
    bg: 'bg-orange-500',
    bgLight: 'bg-orange-100 dark:bg-orange-900/40',
    text: 'text-orange-600 dark:text-orange-400',
    solid: 'bg-orange-500',
    gradient: 'from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10',
  },
  blue: {
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-100 dark:bg-blue-900/40',
    text: 'text-blue-600 dark:text-blue-400',
    solid: 'bg-blue-500',
    gradient: 'from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10',
  },
  violet: {
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-100 dark:bg-violet-900/40',
    text: 'text-violet-600 dark:text-violet-400',
    solid: 'bg-violet-500',
    gradient: 'from-violet-100 to-violet-50 dark:from-violet-900/30 dark:to-violet-900/10',
  },
  teal: {
    bg: 'bg-teal-500',
    bgLight: 'bg-teal-100 dark:bg-teal-900/40',
    text: 'text-teal-600 dark:text-teal-400',
    solid: 'bg-teal-500',
    gradient: 'from-teal-100 to-teal-50 dark:from-teal-900/30 dark:to-teal-900/10',
  },
  amber: {
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-100 dark:bg-amber-900/40',
    text: 'text-amber-600 dark:text-amber-400',
    solid: 'bg-amber-500',
    gradient: 'from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-900/10',
  },
};

type ProjectPreviewProps = {
  projectId: string;
  accent: AccentColor;
};

export function ProjectPreview({ projectId, accent }: ProjectPreviewProps) {
  const a = accentMap[accent];

  switch (projectId) {
    case 'casa-verde':
      return <CasaVerdePreview accent={a} />;
    case 'fitspace':
      return <FitSpacePreview accent={a} />;
    case 'urbannest':
      return <UrbanNestPreview accent={a} />;
    case 'flowdesk':
      return <FlowDeskPreview accent={a} />;
    case 'primecare':
      return <PrimeCarePreview accent={a} />;
    case 'urbancart':
      return <UrbanCartPreview accent={a} />;
    default:
      return null;
  }
}

function Nav({ accent, brand }: { accent: typeof accentMap[keyof typeof accentMap]; brand: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-100 dark:border-ink-800/50 bg-white dark:bg-ink-900">
      <div className={`text-xs font-bold ${accent.text}`}>{brand}</div>
      <div className="flex gap-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-8 h-1.5 rounded-full bg-ink-200 dark:bg-ink-700" />
        ))}
      </div>
    </div>
  );
}

type Accent = typeof accentMap[keyof typeof accentMap];

/* ── Casa Verde — Restaurant ── */
function CasaVerdePreview({ accent }: { accent: Accent }) {
  return (
    <div className="bg-white dark:bg-ink-900">
      <Nav accent={accent} brand="Casa Verde" />
      <div className={`bg-gradient-to-br ${accent.gradient} px-4 py-6 text-center`}>
        <div className={`mx-auto w-12 h-1 rounded-full ${accent.solid} mb-2`} />
        <div className="mx-auto w-36 h-4 rounded bg-ink-800 dark:bg-white mb-2" />
        <div className="mx-auto w-44 h-2 rounded bg-ink-400 dark:bg-ink-500 mb-3" />
        <div className="flex justify-center gap-1.5">
          <div className={`w-20 h-5 rounded-md ${accent.solid}`} />
          <div className="w-16 h-5 rounded-md border border-ink-300 dark:border-ink-600" />
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex justify-center gap-2 mb-3">
          {['All', 'Mains', 'Desserts'].map((c, i) => (
            <div
              key={c}
              className={`px-2.5 py-1 rounded-full text-[10px] ${
                i === 0 ? accent.solid + ' text-white' : 'bg-ink-100 dark:bg-ink-800 text-ink-500'
              }`}
            >
              {c}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border border-ink-100 dark:border-ink-800 overflow-hidden">
              <div className={`h-10 ${accent.bgLight}`} />
              <div className="p-2">
                <div className="w-2/3 h-1.5 rounded bg-ink-700 dark:bg-ink-300 mb-1" />
                <div className="flex justify-between items-center">
                  <div className="w-10 h-1.5 rounded bg-ink-200 dark:bg-ink-700" />
                  <div className={`text-[10px] font-bold ${accent.text}`}>₹₹₹</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── FitSpace — Gym & Fitness ── */
function FitSpacePreview({ accent }: { accent: Accent }) {
  return (
    <div className="bg-white dark:bg-ink-900">
      <Nav accent={accent} brand="FitSpace" />
      <div className={`relative px-4 py-6 bg-gradient-to-br ${accent.gradient}`}>
        <div className={`mx-auto w-28 h-4 rounded bg-ink-800 dark:bg-white mb-2`} />
        <div className="mx-auto w-40 h-2 rounded bg-ink-400 dark:bg-ink-500 mb-3" />
        <div className={`mx-auto w-24 h-6 rounded-lg ${accent.solid}`} />
      </div>
      <div className="px-4 py-3">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {['Strength', 'Cardio', 'Yoga'].map((p) => (
            <div key={p} className="rounded-lg border border-ink-100 dark:border-ink-800 p-2 text-center">
              <div className={`w-6 h-6 mx-auto rounded-lg ${accent.bgLight} mb-1.5`} />
              <div className="w-full h-1.5 rounded bg-ink-300 dark:bg-ink-700" />
            </div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden">
          <div className={`h-16 ${accent.solid} opacity-90`} />
          <div className="p-2 bg-ink-50 dark:bg-ink-800/50 flex justify-between items-center">
            <div>
              <div className="w-16 h-1.5 rounded bg-ink-700 dark:bg-ink-300 mb-1" />
              <div className="w-10 h-1.5 rounded bg-ink-300 dark:bg-ink-600" />
            </div>
            <div className={`text-xs font-bold ${accent.text}`}>₹1,500/mo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── UrbanNest — Real Estate ── */
function UrbanNestPreview({ accent }: { accent: Accent }) {
  return (
    <div className="bg-white dark:bg-ink-900">
      <Nav accent={accent} brand="UrbanNest" />
      <div className="px-4 py-3 bg-ink-50 dark:bg-ink-800/30">
        <div className="flex gap-2 mb-3">
          <div className={`flex-1 h-6 rounded-md ${accent.solid}`} />
          <div className="w-12 h-6 rounded-md bg-ink-200 dark:bg-ink-700" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-ink-100 dark:border-ink-800">
              <div className={`h-12 ${accent.bgLight}`}>
                <div className={`flex justify-end p-1`}>
                  <div className={`w-6 h-1.5 rounded ${accent.solid}`} />
                </div>
              </div>
              <div className="p-2">
                <div className="w-3/4 h-1.5 rounded bg-ink-700 dark:bg-ink-300 mb-1" />
                <div className="flex justify-between">
                  <div className="w-8 h-1.5 rounded bg-ink-300 dark:bg-ink-700" />
                  <div className={`text-[10px] font-bold ${accent.text}`}>₹85L</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── FlowDesk — SaaS Landing ── */
function FlowDeskPreview({ accent }: { accent: Accent }) {
  return (
    <div className="bg-white dark:bg-ink-900">
      <Nav accent={accent} brand="FlowDesk" />
      <div className="px-4 py-6 text-center bg-gradient-to-b from-transparent to-ink-50/50 dark:to-ink-800/20">
        <div className={`mx-auto w-10 h-10 rounded-2xl ${accent.solid} mb-3 flex items-center justify-center`}>
          <div className="w-5 h-5 rounded bg-white/80" />
        </div>
        <div className="mx-auto w-32 h-4 rounded bg-ink-800 dark:bg-white mb-2" />
        <div className="mx-auto w-40 h-2 rounded bg-ink-400 dark:bg-ink-500 mb-3" />
        <div className="flex justify-center gap-1.5">
          <div className={`w-20 h-6 rounded-lg ${accent.solid}`} />
          <div className="w-16 h-6 rounded-lg border border-ink-300 dark:border-ink-600" />
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="text-center mb-3">
          <div className={`mx-auto w-16 h-1.5 rounded ${accent.solid}`} />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-ink-100 dark:border-ink-800 p-2.5 text-center">
              <div className={`w-7 h-7 mx-auto rounded-lg ${accent.bgLight} mb-2`} />
              <div className="w-full h-1.5 rounded bg-ink-300 dark:bg-ink-700 mb-1" />
              <div className="w-2/3 h-1.5 rounded bg-ink-200 dark:bg-ink-800 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── PrimeCare — Service Business ── */
function PrimeCarePreview({ accent }: { accent: Accent }) {
  return (
    <div className="bg-white dark:bg-ink-900">
      <Nav accent={accent} brand="PrimeCare" />
      <div className={`bg-gradient-to-br ${accent.gradient} px-4 py-5 text-center`}>
        <div className={`mx-auto w-10 h-10 rounded-full ${accent.solid} mb-2 flex items-center justify-center`}>
          <div className="w-5 h-5 rounded-full bg-white/70" />
        </div>
        <div className="mx-auto w-32 h-4 rounded bg-ink-800 dark:bg-white mb-2" />
        <div className="mx-auto w-40 h-2 rounded bg-ink-400 dark:bg-ink-500 mb-3" />
        <div className={`mx-auto w-24 h-5 rounded-md ${accent.solid}`} />
      </div>
      <div className="px-4 py-3">
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-ink-100 dark:border-ink-800 p-2">
              <div className={`w-7 h-7 rounded-lg ${accent.bgLight} flex-shrink-0`} />
              <div className="flex-1">
                <div className="w-2/3 h-1.5 rounded bg-ink-700 dark:bg-ink-300 mb-1" />
                <div className="w-1/2 h-1.5 rounded bg-ink-300 dark:bg-ink-700" />
              </div>
              <div className={`w-5 h-5 rounded-full ${accent.solid}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── UrbanCart — E-Commerce ── */
function UrbanCartPreview({ accent }: { accent: Accent }) {
  return (
    <div className="bg-white dark:bg-ink-900">
      <Nav accent={accent} brand="UrbanCart" />
      <div className="px-4 py-3 bg-ink-50 dark:bg-ink-800/30">
        <div className="flex gap-2 mb-3">
          {['All', 'Men', 'Women'].map((c, i) => (
            <div
              key={c}
              className={`px-2.5 py-1 rounded-full text-[10px] ${
                i === 0 ? accent.solid + ' text-white' : 'bg-white dark:bg-ink-700 text-ink-500'
              }`}
            >
              {c}
            </div>
          ))}
          <div className="ml-auto w-5 h-5 rounded-full bg-ink-200 dark:bg-ink-700" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-ink-100 dark:border-ink-800">
              <div className={`h-10 ${accent.bgLight}`} />
              <div className="p-1.5 bg-white dark:bg-ink-800">
                <div className="w-full h-1.5 rounded bg-ink-300 dark:bg-ink-600 mb-1" />
                <div className={`w-6 h-2 rounded ${accent.solid}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
