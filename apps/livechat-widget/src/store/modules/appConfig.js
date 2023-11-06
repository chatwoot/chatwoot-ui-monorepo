import { fetchAppConfigAPI } from '../../api/appConfig';
import * as changeKeys from 'change-case/keys';

import {
  SET_APP_CONFIG_UI_FLAGS,
  SET_BUBBLE_VISIBILITY,
  SET_CHANNEL_CONFIG,
  SET_COLOR_SCHEME,
  SET_REFERRER_HOST,
  SET_WIDGET_APP_CONFIG,
  TOGGLE_WIDGET_OPEN,
} from '../types';
import Vue from 'vue';
import { BUS_EVENTS } from '@chatwoot/shared/constants/busEvents';

const state = {
  channelConfig: {},
  hideMessageBubble: false,
  isCampaignViewClicked: false,
  isWebWidgetTriggered: false,
  isWidgetOpen: false,
  position: 'right',
  referrerHost: '',
  showPopoutButton: false,
  widgetStyle: 'standard',
  darkMode: 'light',
  uiFlags: {
    isFetching: true,
  },
};

export const getters = {
  getAppConfig: $state => $state,
  isRightAligned: $state => $state.position === 'right',
  getHideMessageBubble: $state => $state.hideMessageBubble,
  getIsWidgetOpen: $state => $state.isWidgetOpen,
  getWidgetColor: $state => $state.channelConfig.widgetColor,
  getReferrerHost: $state => $state.referrerHost,
  isWidgetStyleFlat: $state => $state.widgetStyle === 'flat',
  darkMode: $state => $state.darkMode,
  getChannelConfig: $state => $state.channelConfig,
  getUIFlags: $state => $state.uiFlags,
};

export const actions = {
  setAppConfig(
    { commit },
    { showPopoutButton, position, hideMessageBubble, widgetStyle = 'rounded', darkMode = 'light' }
  ) {
    commit(SET_WIDGET_APP_CONFIG, {
      hideMessageBubble: !!hideMessageBubble,
      position: position || 'right',
      showPopoutButton: !!showPopoutButton,
      widgetStyle,
      darkMode,
    });
  },
  async fetchAppConfig({ commit }, params) {
    commit(SET_APP_CONFIG_UI_FLAGS, { isFetching: true });
    try {
      const { data } = await fetchAppConfigAPI(params);
      const { websiteChannelConfig, contact } = changeKeys.camelCase(data || {}, 2);
      commit(SET_CHANNEL_CONFIG, websiteChannelConfig);
      bus.$emit(BUS_EVENTS.INITIALIZE_WEBSOCKET_EVENTS, { channelConfig: websiteChannelConfig, contact });
    } catch (error) {
      // Ignore error
    } finally {
      commit(SET_APP_CONFIG_UI_FLAGS, { isFetching: false });
    }
  },
  toggleWidgetOpen({ commit }, isWidgetOpen) {
    commit(TOGGLE_WIDGET_OPEN, isWidgetOpen);
  },
  setColorScheme({ commit }, darkMode) {
    commit(SET_COLOR_SCHEME, darkMode);
  },
  setReferrerHost({ commit }, referrerHost) {
    commit(SET_REFERRER_HOST, referrerHost);
  },
  setBubbleVisibility({ commit }, hideMessageBubble) {
    commit(SET_BUBBLE_VISIBILITY, hideMessageBubble);
  },
};

export const mutations = {
  [SET_WIDGET_APP_CONFIG]($state, data) {
    $state.showPopoutButton = data.showPopoutButton;
    $state.position = data.position;
    $state.hideMessageBubble = data.hideMessageBubble;
    $state.widgetStyle = data.widgetStyle;
    $state.darkMode = data.darkMode;
    $state.locale = data.locale || $state.locale;
  },
  [TOGGLE_WIDGET_OPEN]($state, isWidgetOpen) {
    $state.isWidgetOpen = isWidgetOpen;
  },
  [SET_CHANNEL_CONFIG]($state, channelConfig) {
    Vue.set($state, 'channelConfig', channelConfig);
  },
  [SET_REFERRER_HOST]($state, referrerHost) {
    $state.referrerHost = referrerHost;
  },
  [SET_BUBBLE_VISIBILITY]($state, hideMessageBubble) {
    $state.hideMessageBubble = hideMessageBubble;
  },
  [SET_COLOR_SCHEME]($state, darkMode) {
    $state.darkMode = darkMode;
  },
  [SET_APP_CONFIG_UI_FLAGS]($state, uiFlags) {
    $state.uiFlags = { ...$state.uiFlags, ...uiFlags };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
