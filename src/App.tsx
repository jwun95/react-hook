import {useState, useEffect} from 'react'

export default function App() {

		useEffect(async () => {
      await Promise.resolve(1)
    }, [])

  return (
    <main>

    </main>
  )
}
