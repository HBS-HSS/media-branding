/**
 * Hierarchy Technologies — Tailwind CSS preset.
 * Derived from tokens.json. Do not edit by hand — regenerate from source.
 *
 * Usage (tailwind.config.js):
 *   module.exports = {
 *     presets: [require('./branding/tokens/tokens.tailwind.cjs')],
 *     content: [...]
 *   };
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          azure: {
            50: '#EEF2FA', 100: '#DBE3F4', 200: '#B3C2E5', 300: '#8AA1D7',
            400: '#6480C2', 500: '#4261AD', 600: '#36529A', 700: '#2A4280',
            800: '#1F3266', 900: '#15224D',
            DEFAULT: '#4261AD',
          },
          indigo: {
            50: '#EFEDFA', 100: '#DBD7F2', 200: '#B6AEE0', 300: '#8C82CB',
            400: '#635AB0', 500: '#392F8E', 600: '#2F2778', 700: '#251E60',
            800: '#1B1648', 900: '#110D30',
            DEFAULT: '#392F8E',
          },
          violet: {
            50: '#F0EDF9', 100: '#DDD7F1', 200: '#BAAEE0', 300: '#9282CB',
            400: '#6A55AE', 500: '#482D89', 600: '#3C2575', 700: '#2F1D5F',
            800: '#221548', 900: '#160D30',
            DEFAULT: '#482D89',
          },
        },
        ink: '#231F20',
        success: { 50: '#ECFDF5', 500: '#16A34A', 700: '#15803D', DEFAULT: '#16A34A' },
        warning: { 50: '#FFFBEB', 500: '#D97706', 700: '#B45309', DEFAULT: '#D97706' },
        danger:  { 50: '#FEF2F2', 500: '#DC2626', 700: '#B91C1C', DEFAULT: '#DC2626' },
        info:    { 50: '#EEF2FA', 500: '#4261AD', 700: '#2A4280', DEFAULT: '#4261AD' },
      },
      fontFamily: {
        display: ['Sora', 'Manrope', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1.5'  }],
        sm:   ['0.875rem', { lineHeight: '1.5'  }],
        base: ['1rem',     { lineHeight: '1.5'  }],
        lg:   ['1.125rem', { lineHeight: '1.5'  }],
        xl:   ['1.25rem',  { lineHeight: '1.25' }],
        '2xl':['1.563rem', { lineHeight: '1.25' }],
        '3xl':['1.953rem', { lineHeight: '1.25' }],
        '4xl':['2.441rem', { lineHeight: '1.1'  }],
        '5xl':['3.052rem', { lineHeight: '1.1'  }],
        '6xl':['3.815rem', { lineHeight: '1.1'  }],
      },
      letterSpacing: {
        tight:  '-0.02em',
        normal: '0',
        wide:   '0.05em',
        wider:  '0.12em',
      },
      spacing: {
        0: '0', 1: '0.25rem', 2: '0.5rem', 3: '0.75rem', 4: '1rem',
        5: '1.25rem', 6: '1.5rem', 8: '2rem', 10: '2.5rem', 12: '3rem',
        16: '4rem', 24: '6rem',
      },
      borderRadius: {
        none: '0', sm: '0.25rem', md: '0.5rem', lg: '0.75rem', xl: '1rem',
        pill: '9999px', circle: '50%',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(35, 31, 32, 0.05)',
        sm: '0 1px 3px 0 rgba(35, 31, 32, 0.10), 0 1px 2px -1px rgba(35, 31, 32, 0.10)',
        md: '0 4px 6px -1px rgba(35, 31, 32, 0.10), 0 2px 4px -2px rgba(35, 31, 32, 0.10)',
        lg: '0 10px 15px -3px rgba(35, 31, 32, 0.10), 0 4px 6px -4px rgba(35, 31, 32, 0.10)',
        xl: '0 20px 25px -5px rgba(35, 31, 32, 0.10), 0 8px 10px -6px rgba(35, 31, 32, 0.10)',
      },
      backgroundImage: {
        'gradient-brand':          'linear-gradient(90deg, #4261AD 0%, #392F8E 50%, #482D89 100%)',
        'gradient-brand-reversed': 'linear-gradient(90deg, #8AA1D7 0%, #8C82CB 50%, #9282CB 100%)',
      },
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl':'1536px',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '320ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        emphasis: 'cubic-bezier(0.3, 0, 0, 1)',
      },
    },
  },
};
