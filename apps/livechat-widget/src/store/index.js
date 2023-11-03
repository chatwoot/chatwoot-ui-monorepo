import Vue from 'vue';
import Vuex from 'vuex';
import agent from './modules/agent';
import appConfig from './modules/appConfig';
import contacts from './modules/contacts';
import conversation from './modules/conversation';
import conversationAttributes from './modules/conversationAttributes';
import conversationLabels from './modules/conversationLabels';
import events from './modules/events';
import globalConfig from '@chatwoot/shared/store/globalConfig';
import message from './modules/message';
import campaign from './modules/campaign';
import article from './modules/articles';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    agent,
    appConfig,
    contacts,
    conversation,
    conversationAttributes,
    conversationLabels,
    events,
    globalConfig,
    message,
    campaign,
    article,
  },
});
