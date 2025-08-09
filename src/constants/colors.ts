// Color constants based on the design system
export const COLORS = {
  // Primary colors from the design system
  primary: {
    black: '#171717',
    red: '#B3232E',
    white: '#FFFFFF'
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    light: '#EFEFEF',
    medium: '#CACACA',
    dark: '#171717'
  },
  
  // Semantic colors
  background: {
    primary: '#FFFFFF',
    secondary: '#EFEFEF',
    dark: '#171717'
  },
  
  text: {
    primary: '#171717',
    secondary: '#CACACA',
    inverse: '#FFFFFF',
    accent: '#B3232E'
  },
  
  // Interactive colors
  interactive: {
    primary: '#B3232E',
    primaryHover: '#9A1F28',
    primaryActive: '#821B23',
    secondary: '#171717',
    secondaryHover: '#2A2A2A',
    secondaryActive: '#3D3D3D'
  },
  
  // Border colors
  border: {
    light: '#EFEFEF',
    medium: '#CACACA',
    dark: '#171717'
  },
  
  // Status colors (extended palette)
  status: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  }
} as const;

// Color utility functions
export const getColorWithOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// CSS custom properties for dynamic theming
export const CSS_VARIABLES = {
  '--color-primary-black': COLORS.primary.black,
  '--color-primary-red': COLORS.primary.red,
  '--color-primary-white': COLORS.primary.white,
  '--color-neutral-white': COLORS.neutral.white,
  '--color-neutral-light': COLORS.neutral.light,
  '--color-neutral-medium': COLORS.neutral.medium,
  '--color-neutral-dark': COLORS.neutral.dark,
  '--color-background-primary': COLORS.background.primary,
  '--color-background-secondary': COLORS.background.secondary,
  '--color-background-dark': COLORS.background.dark,
  '--color-text-primary': COLORS.text.primary,
  '--color-text-secondary': COLORS.text.secondary,
  '--color-text-inverse': COLORS.text.inverse,
  '--color-text-accent': COLORS.text.accent,
  '--color-interactive-primary': COLORS.interactive.primary,
  '--color-interactive-primary-hover': COLORS.interactive.primaryHover,
  '--color-interactive-primary-active': COLORS.interactive.primaryActive,
  '--color-interactive-secondary': COLORS.interactive.secondary,
  '--color-interactive-secondary-hover': COLORS.interactive.secondaryHover,
  '--color-interactive-secondary-active': COLORS.interactive.secondaryActive,
  '--color-border-light': COLORS.border.light,
  '--color-border-medium': COLORS.border.medium,
  '--color-border-dark': COLORS.border.dark
} as const;

// Tailwind color classes for easy usage
export const COLOR_CLASSES = {
  background: {
    primary: 'bg-white',
    secondary: 'bg-neutral-100',
    dark: 'bg-neutral-900',
    accent: 'bg-red-600'
  },
  text: {
    primary: 'text-neutral-900',
    secondary: 'text-neutral-400',
    inverse: 'text-white',
    accent: 'text-red-600'
  },
  border: {
    light: 'border-neutral-100',
    medium: 'border-neutral-300',
    dark: 'border-neutral-900'
  }
} as const;