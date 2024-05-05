'use client'

import { useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('')
  return (
    <main className="flex flex-col p-4 gap-2">
      <textarea
        className="text-5xl border"
        style={{ height: 'calc(100vh - 100px)' }}
        onChange={e => setValue(e.target.value)}
        value={value}
        autoFocus
      />
      <div>
        <button className="bg-blue-400 py-1 px-2" onClick={() => setValue('')}>
          Clear
        </button>
      </div>
    </main>
  )
}
