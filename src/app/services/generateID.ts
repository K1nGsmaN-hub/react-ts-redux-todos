export const generateID = (value: number) =>
  Math.random().toString(36).substr(value);
