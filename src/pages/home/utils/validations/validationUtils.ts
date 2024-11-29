export const isMinLength = (value: string, length: number): boolean =>
  value.length >= length;

export const matchesPattern = (value: string, pattern: RegExp): boolean =>
  pattern.test(value);
