import mitt from 'mitt';

const emitter = mitt();

export const BUS_EVENTS = {
  TOAST_MESSAGE_CREATED: 'TOAST_MESSAGE_CREATED'
}

export default emitter
