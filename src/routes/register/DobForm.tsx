import React, { useState } from 'react'

export interface DobFormProps {
  dob: string,
  onSubmit(dob: string): void
}

export function DobForm({dob, onSubmit}: DobFormProps) {
  const [ value, setValue ] = useState(dob)
  return (
    <div>
      <h2>DOB</h2>
      <form onSubmit={() => onSubmit(value)}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <input type="submit"/>
      </form>
    </div>
  )
}