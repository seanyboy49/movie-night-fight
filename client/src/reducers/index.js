import toastType from './toastType'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  toast: toastType,
})

export default allReducers
