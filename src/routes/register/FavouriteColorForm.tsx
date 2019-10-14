import React, { useState } from 'react'
import { FavourtieColor } from '../../shapes/FavouriteColours'

export interface FavouriteColorFormProps {
  colour: FavourtieColor,
  onSubmit(name: FavourtieColor): void
}

export function FavouriteColourForm({colour, onSubmit: onChange}: FavouriteColorFormProps) {
  const [ value, setValue ] = useState(colour)
  return (
    <div>
      <h2>Favourite Colour</h2>
      <form onSubmit={() => onChange(value)}>
        <select value={value} onChange={e => setValue(e.target.value as FavourtieColor)}>
          <option value={FavourtieColor.Blue}>Blue</option>
          <option value={FavourtieColor.Green}>Green</option>
          <option value={FavourtieColor.Red}>Red</option>
        </select>
        <input type="submit"/>
      </form>
    </div>
  )
}