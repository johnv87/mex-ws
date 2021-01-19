import reduxWebSocket, { connect } from '@giantmachines/redux-websocket'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'

const reduxWebSocketMiddleware = reduxWebSocket()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, reduxWebSocketMiddleware))
)
store.dispatch(connect('ws://testapi.marit.expert:3004'))
