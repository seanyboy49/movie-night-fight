const toastType = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { color: '#33DDA8', message: action.payload }
    case 'FAILURE':
      return {
        color: '#FF0E0E',
        message: action.payload,
      }
    case 'REMOVE':
      return {}
    default:
      return state
  }
}

export default toastType
