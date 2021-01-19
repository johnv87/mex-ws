import { send } from '@giantmachines/redux-websocket/dist'
import { store } from './store'

export const ERROR = 'REDUX_WEBSOCKET::ERROR'
export const MESSAGE = 'REDUX_WEBSOCKET::MESSAGE'
export const SEND = 'REDUX_WEBSOCKET::SEND'
export const UPDATE = 'REDUX_WEBSOCKET::UPDATE'
export const DELETE = 'REDUX_WEBSOCKET::DELETE'

export const sendMessage = (
  message = 'get_list',
  timeout,
  hero
) => async dispatch => {
  //  Initial request
  const request = { get: message }

  const blobReq = new Blob([JSON.stringify(request, null, 2)], {
    type: 'application/json',
  })

  //  Timeout before sending message on loading page
  //  until server sends OPEN state
  if (timeout) {
    console.log('Timeout here')
    setTimeout(() => {
      store.dispatch(send(blobReq))
      dispatch({ type: SEND })
    }, timeout)
  } else {
    store.dispatch(send(blobReq))
    dispatch({ type: SEND })
  }

  //  Custom action to send updated message with changed hero name etc...
  if (hero) {
    store.dispatch(send(blobReq))
    dispatch({ type: UPDATE, payload: hero })
  }

  if (message === 'delete_hero') {
    //  Dispatch custom action to delete selected hero
    dispatch({ type: DELETE, payload: hero })
  }
}
