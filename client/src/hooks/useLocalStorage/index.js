import { useEffect, useReducer } from 'react'

const eventName = 'updateLocalStorage'

const useLocalStorage = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  // Force render components when a feature flag is updated.
  // This is inevitable because React doesn't check localStorage change for re-rendering components.
  useEffect(() => {
    document.addEventListener(eventName, forceUpdate)
    return () => document.removeEventListener(eventName, forceUpdate)
  }, [])

  function get(item) {
    return localStorage.getItem(item) || undefined
  }

  function set(item, value) {
    localStorage.setItem(item, value)
    document.dispatchEvent(new CustomEvent(eventName))
  }

  function remove(item) {
    localStorage.removeItem(item)
    document.dispatchEvent(new CustomEvent(eventName))
  }

  return { get, set, remove }
}

export default useLocalStorage
