export const validateRequiredFields = requiredFields => (values) => {
  const errors = {};
  requiredFields.forEach((field) => {
    const value = values[field];
    if (!value || (value.constructor === Array && value.length === 0)) {
      errors[field] = 'Este campo es obligatorio';
    }
  });
  return errors;
};

export const toSelectFormat = ({ id: value, name: label }) => ({ value, label });
