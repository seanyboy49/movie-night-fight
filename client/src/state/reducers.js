const green = '#33DDA8'
const red = '#FF0E0E'

const toastType = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { color: green, message: action.payload, isActive: true }
    case 'FAILURE':
      return {
        color: red,
        message: action.payload,
        isActive: true,
      }
    case 'REMOVE':
      return { ...state, isActive: false }
    default:
      return state
  }
}

export default toastType
