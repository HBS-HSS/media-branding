// Hierarchy Technologies — design tokens (TypeScript).
// Derived from tokens.json. Do not edit by hand — regenerate from source.

export const htColors = {
  brand: {
    azure: {
      50:  '#EEF2FA', 100: '#DBE3F4', 200: '#B3C2E5', 300: '#8AA1D7',
      400: '#6480C2', 500: '#4261AD', 600: '#36529A', 700: '#2A4280',
      800: '#1F3266', 900: '#15224D',
    },
    indigo: {
      50:  '#EFEDFA', 100: '#DBD7F2', 200: '#B6AEE0', 300: '#8C82CB',
      400: '#635AB0', 500: '#392F8E', 600: '#2F2778', 700: '#251E60',
      800: '#1B1648', 900: '#110D30',
    },
    violet: {
      50:  '#F0EDF9', 100: '#DDD7F1', 200: '#BAAEE0', 300: '#9282CB',
      400: '#6A55AE', 500: '#482D89', 600: '#3C2575', 700: '#2F1D5F',
      800: '#221548', 900: '#160D30',
    },
  },
  neutral: {
    0:    '#FFFFFF', 50:  '#FAFAFA', 100: '#F4F4F5', 200: '#E4E4E7',
    300:  '#D4D4D8', 400: '#A1A1AA', 500: '#71717A', 600: '#52525B',
    700:  '#3F3F46', 800: '#27272A', 900: '#231F20', 1000:'#000000',
  },
  semantic: {
    success: { 50: '#ECFDF5', 500: '#16A34A', 700: '#15803D' },
    warning: { 50: '#FFFBEB', 500: '#D97706', 700: '#B45309' },
    danger:  { 50: '#FEF2F2', 500: '#DC2626', 700: '#B91C1C' },
    info:    { 50: '#EEF2FA', 500: '#4261AD', 700: '#2A4280' },
  },
  surface: {
    background: '#FFFFFF',
    subtle:     '#FAFAFA',
    raised:     '#F4F4F5',
    inverse:    '#231F20',
  },
  text: {
    primary:   '#231F20',
    secondary: '#3F3F46',
    muted:     '#71717A',
    inverse:   '#FFFFFF',
    link:      '#2A4280',
  },
} as const;

export const htGradients = {
  /** Use on light surfaces only. */
  brand:         'linear-gradient(90deg, #4261AD 0%, #392F8E 50%, #482D89 100%)',
  /** Light-shifted (-300 ramp) for dark surfaces. */
  brandReversed: 'linear-gradient(90deg, #8AA1D7 0%, #8C82CB 50%, #9282CB 100%)',
} as const;

export const htFontFamily = {
  display: "'Sora', 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  body:    "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

export const htFontWeight = {
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

export const htFontSize = {
  xs:   '0.75rem',
  sm:   '0.875rem',
  base: '1rem',
  lg:   '1.125rem',
  xl:   '1.25rem',
  '2xl':'1.563rem',
  '3xl':'1.953rem',
  '4xl':'2.441rem',
  '5xl':'3.052rem',
  '6xl':'3.815rem',
} as const;

export const htLineHeight = {
  tight:   1.1,
  snug:    1.25,
  normal:  1.5,
  relaxed: 1.75,
} as const;

export const htLetterSpacing = {
  tight:  '-0.02em',
  normal: '0',
  wide:   '0.05em',
  wider:  '0.12em',
} as const;

export const htSpace = {
  0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem',
  5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem',
  16: '4rem', 24: '6rem',
} as const;

export const htRadius = {
  none:   '0',
  sm:     '0.25rem',
  md:     '0.5rem',
  lg:     '0.75rem',
  xl:     '1rem',
  pill:   '9999px',
  circle: '50%',
} as const;

export const htShadow = {
  xs: '0 1px 2px 0 rgba(35, 31, 32, 0.05)',
  sm: '0 1px 3px 0 rgba(35, 31, 32, 0.10), 0 1px 2px -1px rgba(35, 31, 32, 0.10)',
  md: '0 4px 6px -1px rgba(35, 31, 32, 0.10), 0 2px 4px -2px rgba(35, 31, 32, 0.10)',
  lg: '0 10px 15px -3px rgba(35, 31, 32, 0.10), 0 4px 6px -4px rgba(35, 31, 32, 0.10)',
  xl: '0 20px 25px -5px rgba(35, 31, 32, 0.10), 0 8px 10px -6px rgba(35, 31, 32, 0.10)',
} as const;

export const htBreakpoint = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl':'1536px',
} as const;

export const htMotion = {
  duration: {
    instant: '0ms',
    fast:    '120ms',
    base:    '200ms',
    slow:    '320ms',
    slower:  '480ms',
  },
  easing: {
    linear:     'linear',
    standard:   'cubic-bezier(0.2, 0, 0, 1)',
    emphasis:   'cubic-bezier(0.3, 0, 0, 1)',
    decelerate: 'cubic-bezier(0, 0, 0, 1)',
    accelerate: 'cubic-bezier(0.3, 0, 1, 1)',
  },
} as const;

export type HtColorScale = keyof typeof htColors.brand.azure;
