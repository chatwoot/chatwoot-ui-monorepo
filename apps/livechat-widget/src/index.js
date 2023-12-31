import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueDOMPurifyHTML from 'vue-dompurify-html';
import VueFormulate from '@braid/vue-formulate';
import store from './store';
import Initializer from './Initializer.vue';
import i18n from './i18n';
import { startsWithPlus, isPhoneNumberValidWithDialCode } from '@chatwoot/shared/helpers/Validators';
import router from './router';
import { domPurifyConfig } from '@chatwoot/shared/helpers/HTMLSanitizer';
const PhoneInput = () => import('./components/Form/PhoneInput.vue');

Vue.use(VueI18n);
Vue.use(VueDOMPurifyHTML, domPurifyConfig);

const i18nConfig = new VueI18n({
  locale: 'en',
  messages: i18n,
});
Vue.use(VueFormulate, {
  library: {
    phoneInput: {
      classification: 'number',
      component: PhoneInput,
      slotProps: {
        component: ['placeholder', 'hasErrorInPhoneInput'],
      },
    },
  },
  rules: {
    startsWithPlus: ({ value }) => startsWithPlus(value),
    isValidPhoneNumber: ({ value }) => isPhoneNumberValidWithDialCode(value),
  },
  classes: {
    outer: 'mb-2 wrapper',
    error: 'text-red-400 mt-2 text-xs leading-3 font-medium',
  },
});
// Event Bus
window.bus = new Vue();

Vue.config.productionTip = false;

window.onload = () => {
  window.WOOT_WIDGET = new Vue({
    router,
    store,
    i18n: i18nConfig,
    render: h => h(Initializer),
  }).$mount('#app');
};
