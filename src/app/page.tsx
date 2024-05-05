'use client'

import Radio from '@/components/Radio'
import { useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('')
  const [size, setSize] = useState('5xl')
  console.log({ size })
  return (
    <main className="flex flex-col p-4 gap-2">
      <Radio
        options={[
          {
            label: '4xl',
            value: '4xl',
          },
          {
            label: '5xl',
            value: '5xl',
          },
          {
            label: '6xl',
            value: '6xl',
          },
        ]}
        value={size}
        setValue={setSize}
      />

      <textarea
        className={`text-${size} border`}
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
