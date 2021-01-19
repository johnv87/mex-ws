import { combineReducers } from 'redux'
import { socketReducer } from './socketReducer'

export const rootReducer = combineReducers({ socketReducer })
