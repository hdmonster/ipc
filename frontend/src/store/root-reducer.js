import { combineReducers } from '@reduxjs/toolkit'
import { reducer as documentReducer } from '../slices/document'

export const rootReducer = combineReducers({
  document: documentReducer,
})
