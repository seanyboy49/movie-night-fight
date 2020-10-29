import React, { useEffect, useState } from 'react'

import './App.css'

const API_URI =
  process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:8000/api'
    : 'https://movienightfight.herokuapp.com/api'

function App() {
  const [formValue, setFormValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${API_URI}/hello`)
        const data = await response.json()

        setDisplayValue(data)
      } catch (error) {
        console.log('error', error)
      }
    }

    getData()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch(`${API_URI}/hello`, {
        method: 'POST',
        body: JSON.stringify(formValue),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      setDisplayValue(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  if (!displayValue) return null

  return (
    <div className="App">
      <form>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <div>
        {displayValue.map((v) => (
          <h4 key={v}>{v}</h4>
        ))}
      </div>
    </div>
  )
}

export default App
