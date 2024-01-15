import axios from 'axios';
// Global Components
import hljs from 'highlight.js';
import Multiselect from 'vue-multiselect';
import VueFormulate from '@braid/vue-formulate';
import WootSwitch from '@/components/ui/Switch.vue';
import WootWizard from '@/components/ui/Wizard.vue';
import VTooltip from 'v-tooltip';
import WootUiKit from '@/components';
import App from '@/App.vue';
import i18n from '@/i18n';
import createAxios from '@/helper/APIHelper';
import commonHelpers, { isJSONValid } from '@/helper/commons';
import router from '@/v4/router';
import store from '@/store';
import constants from 'dashboard/constants/globals';
import * as Sentry from '@sentry/vue';
import 'vue-easytable/libs/theme-default/index.css';
import { Integrations } from '@sentry/tracing';
import {
  initializeAnalyticsEvents,
  initializeChatwootEvents,
} from '@/helper/scriptHelpers';
import FluentIcon from '@/shared/components/FluentIcon/DashboardIcon.vue';
import VueDOMPurifyHTML from 'vue-dompurify-html';
import { domPurifyConfig } from '@/shared/helpers/HTMLSanitizer';
import AnalyticsPlugin from '@/helper/AnalyticsHelper/plugin';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const pinia = createPinia()

const i18nConfig = createI18n({
  locale: 'en',
  messages: i18n,
});

const app = createApp(App);
app.use(store);
app.use(pinia);
app.use(i18nConfig)
app.use(VueDOMPurifyHTML, domPurifyConfig);
app.use(router);
app.use(WootUiKit);
app.use(VueFormulate, {
  rules: {
    JSON: ({ value }) => isJSONValid(value),
  },
});
app.use(VTooltip, {
  defaultHtml: false,
});
app.use(hljs.vuePlugin);

app.component('multiselect', Multiselect);
app.component('woot-switch', WootSwitch);
app.component('woot-wizard', WootWizard);
app.component('fluent-icon', FluentIcon);

// load common helpers into js
commonHelpers();

window.WootConstants = constants;
window.axios = createAxios(axios);
initializeChatwootEvents();
initializeAnalyticsEvents();
window.onload = () => {
  window.WOOT = app.mount('#app');
};

window.addEventListener('load', () => {
  window.playAudioAlert = () => { };
});


// if (window.errorLoggingConfig) {
//   Sentry.init({
//     Vue,
//     dsn: window.errorLoggingConfig,
//     denyUrls: [
//       // Chrome extensions
//       /^chrome:\/\//i,
//       /chrome-extension:/i,
//       /extensions\//i,

//       // Locally saved copies
//       /file:\/\//i,

//       // Safari extensions.
//       /safari-web-extension:/i,
//       /safari-extension:/i,
//     ],
//     integrations: [new Integrations.BrowserTracing()],
//     ignoreErrors: [
//       'ResizeObserver loop completed with undelivered notifications',
//     ],
//   });
// }
// Vue.use(AnalyticsPlugin);
