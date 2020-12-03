const toastType = (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { color: 'green', message: 'success!' }
    case 'FAIL':
      return {
        color: 'red',
        message: 'something went wrong. Please try again.',
      }
    default:
      return state
  }
}

export default toastType
