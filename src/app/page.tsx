'use client'

import Radio from '@/components/Radio'
import { useRef, useState } from 'react'

export default function Home() {
  const textareaRef = useRef(null)
  const [value, setValue] = useState('')
  const [size, setSize] = useState('5xl')
  return (
    <main className="flex flex-col p-4 gap-2">
      <div className="flex gap-2">
        <span>Size: </span>
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
            {
              label: '7xl',
              value: '7xl',
            },
          ]}
          value={size}
          setValue={setSize}
        />
      </div>
      <textarea
        ref={textareaRef}
        rows={5}
        className={`text-${size} border p-2`}
        style={{ height: 'auto', overflow: 'auto' }}
        onChange={e => {
          setValue(e.target.value)

          let textarea: any = textareaRef.current
          if (textarea) {
            textarea.style.height = `${textarea.scrollHeight}px`
          }
        }}
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
