import { combineReducers } from 'redux'

import * as actions from './actions'
import toastType from './reducers'

const allReducers = combineReducers({
  toast: toastType,
})

export { allReducers, actions }
