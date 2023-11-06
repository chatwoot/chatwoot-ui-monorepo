<template>
  <div v-if="uiFlags.isFetching" class="h-full w-full bg-slate-50 flex items-center justify-center">
    Initializing...
  </div>
  <app v-else />
</template>

<script>
import App from './App.vue';
import ActionCableConnector from './helpers/actionCable';
import { mapGetters } from 'vuex';
import { BUS_EVENTS } from '@chatwoot/shared/constants/busEvents';

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
      const url = new URL(window.location.href);
      this.$store.dispatch('appConfig/fetchAppConfig', {
        token: url.searchParams.get('cw_conversation'),
        websiteToken: url.searchParams.get('website_token'),
      });
    },
    onIntializeWebSocketEvents({ channelConfig, contact }) {
      // eslint-disable-next-line
      new ActionCableConnector(window.WOOT_WIDGET, contact.pubsubToken, channelConfig.apiHost);
    },
  },
};
</script>
