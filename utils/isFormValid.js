export const isFormValid = (values, requiredFields) => {
  return requiredFields.every(
    (field) => values[field] && values[field].trim() !== ''
  );
};
