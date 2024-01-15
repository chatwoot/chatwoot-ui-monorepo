import { required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  title: {
    required,
    minLength: minLength(2),
  },
  description: {},
  showOnSidebar: {},
};
