import { defineStore } from 'pinia'

const initialState = {
  version: '0.0.0',
  locale: 'en',
  
}

export const useCurrentUserStore = defineStore('currentUser', {
  state: () => ({ ...initialState }),
  getters: {

  },
  actions: {

  }
})
