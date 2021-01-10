const useLocalStorage = () => {
  function get(item) {
    return localStorage.getItem(item) || undefined
  }

  function set(item, value) {
    localStorage.setItem(item, value)
  }

  function remove(item) {
    localStorage.removeItem(item)
  }

  return { get, set, remove }
}

export default useLocalStorage
