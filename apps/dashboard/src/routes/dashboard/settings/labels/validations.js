import { required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export const validLabelCharacters = (str = '') => !!str && !str.includes(' ');

export default {
  title: {
    required,
    minLength: minLength(2),
    validLabelCharacters,
  },
  description: {},
  color: {
    required,
  },
  showOnSidebar: {},
};
