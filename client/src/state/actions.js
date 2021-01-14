export const success = (payload) => ({
  type: 'SUCCESS',
  payload,
})

export const failure = (payload) => ({
  type: 'FAILURE',
  payload,
})

export const remove = () => ({
  type: 'REMOVE',
})
