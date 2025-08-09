// Export all constants from a single entry point
export * from './typography';
export * from './colors';

// Combined theme object for easy access
import { FONTS, FONT_WEIGHTS, FONT_SIZES, LINE_HEIGHTS, LETTER_SPACING, TYPOGRAPHY_CLASSES } from './typography';
import { COLORS, CSS_VARIABLES, COLOR_CLASSES } from './colors';

export const THEME = {
  fonts: FONTS,
  fontWeights: FONT_WEIGHTS,
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  letterSpacing: LETTER_SPACING,
  typography: TYPOGRAPHY_CLASSES,
  colors: COLORS,
  colorClasses: COLOR_CLASSES,
  cssVariables: CSS_VARIABLES
} as const;

// Type definitions for theme
export type ThemeColors = typeof COLORS;
export type ThemeFonts = typeof FONTS;
export type ThemeTypography = typeof TYPOGRAPHY_CLASSES;