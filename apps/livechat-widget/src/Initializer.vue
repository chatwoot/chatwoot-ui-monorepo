<template>
  <div
    v-if="uiFlags.isFetching"
    class="h-full w-full bg-slate-50 flex items-center justify-center text-center text-slate-700"
  >
    Initializing...
  </div>
  <div
    v-else-if="uiFlags.hasError"
    class="h-full w-full bg-slate-50 flex items-center justify-center text-center text-slate-700"
  >
    There was an error loading the widget, please try again.
  </div>
  <app v-else />
</template>

<script>
import App from './App.vue';
import ActionCableConnector from './helpers/actionCable';
import { mapGetters } from 'vuex';
import { BUS_EVENTS } from '@chatwoot/shared/constants/busEvents';
import { setBaseURL } from 'widget/helpers/axios';
export default {
  components: { App },
  computed: {
    ...mapGetters({ uiFlags: 'appConfig/getUIFlags' }),
  },
  mounted() {
    this.fetchAppConfig();
    bus.$on(BUS_EVENTS.INITIALIZE_WEBSOCKET_EVENTS, this.onIntializeWebSocketEvents);
  },
  destroyed() {
    bus.$off(BUS_EVENTS.INITIALIZE_WEBSOCKET_EVENTS, this.onIntializeWebSocketEvents);
  },
  methods: {
    fetchAppConfig() {
      setBaseURL();
      const url = new URL(window.location.href);
      this.$store.dispatch('appConfig/fetchAppConfig', {
        token: url.searchParams.get('cw_conversation') || '',
        websiteToken: url.searchParams.get('website_token') || '',
      });
    },
    onIntializeWebSocketEvents({ channelConfig, contact }) {
      // eslint-disable-next-line
      new ActionCableConnector(window.WOOT_WIDGET, contact.pubsubToken, channelConfig.apiHost);
    },
  },
};
</script>
