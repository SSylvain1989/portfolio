export const RESET_FIELDS = 'RESET_FIELDS';
export const CHANGE_CONTACT_FIELD_VALUE = 'CHANGE_CONTACT_FIELD_VALUE';

export const resetFields = () => ({
  type: RESET_FIELDS,
});

export const changeContactFieldValue = (value, name) => ({
  type: CHANGE_CONTACT_FIELD_VALUE,
  value,
  name,
});
