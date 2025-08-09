// Typography constants based on the design system
export const FONTS = {
  primary: 'Coanda',
  secondary: 'Poppins',
  fallback: 'Arial, sans-serif'
} as const;

export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
} as const;

export const FONT_SIZES = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
  '8xl': '6rem',    // 96px
  '9xl': '8rem'     // 128px
} as const;

export const LINE_HEIGHTS = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2'
} as const;

export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
} as const;

// Typography utility classes
export const TYPOGRAPHY_CLASSES = {
  heading: {
    h1: `font-${FONTS.primary} text-6xl font-bold leading-tight`,
    h2: `font-${FONTS.primary} text-5xl font-bold leading-tight`,
    h3: `font-${FONTS.primary} text-4xl font-semibold leading-snug`,
    h4: `font-${FONTS.primary} text-3xl font-semibold leading-snug`,
    h5: `font-${FONTS.primary} text-2xl font-medium leading-normal`,
    h6: `font-${FONTS.primary} text-xl font-medium leading-normal`
  },
  body: {
    large: `font-${FONTS.secondary} text-lg font-regular leading-relaxed`,
    base: `font-${FONTS.secondary} text-base font-regular leading-normal`,
    small: `font-${FONTS.secondary} text-sm font-regular leading-normal`,
    xs: `font-${FONTS.secondary} text-xs font-regular leading-normal`
  },
  display: {
    hero: `font-${FONTS.primary} text-8xl font-black leading-none tracking-tight`,
    large: `font-${FONTS.primary} text-7xl font-extrabold leading-none tracking-tight`,
    medium: `font-${FONTS.primary} text-6xl font-bold leading-tight tracking-tight`
  }
} as const;