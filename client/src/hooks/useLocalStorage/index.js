const useLocalStorage = () => {
  function get(item) {
    return localStorage.getItem(item) || undefined
  }

  function set(item) {
    localStorage.setItem(item)
  }

  return { get, set }
}

export default useLocalStorage
