const toastType = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { color: '#33DDA8', message: action.message }
    case 'FAIL':
      return {
        color: '#FF0E0E',
        message: action.message,
      }
    case 'REMOVE':
      return {}
    default:
      return state
  }
}

export default toastType
