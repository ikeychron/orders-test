export const validateNumber = (value: string): boolean =>
  RegExp("^[0-9]+$").test(value);
