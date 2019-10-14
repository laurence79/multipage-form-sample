import React, { useState } from 'react'

export interface NameFormProps {
  name: string,
  onSubmit(name: string): void
}

export function NameForm({name, onSubmit: onChange}: NameFormProps) {
  const [ value, setValue ] = useState(name)
  return (
    <div>
      <h2>Name</h2>
      <form onSubmit={() => onChange(value)}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <input type="submit"/>
      </form>
    </div>
  )
}