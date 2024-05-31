export const validateSpainPostalCode = (postalCode: string) => {
  const postalCodeRegex = /^(0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/;

  return postalCodeRegex.test(postalCode);
};
