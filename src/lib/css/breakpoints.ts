export const breakpoints = {
  s: 524, // phone
  m: 768, // tablet
  l: 1024, // small laptop
  xl: 1250, // laptop
  xxl: 1440, // desktop
};

export type Breakpoints = typeof breakpoints;
export type Breakpoint = keyof Breakpoints;
