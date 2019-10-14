import React, { useState } from 'react'
import { FavourtieColor } from '../../shapes/FavouriteColours'
import { Link } from 'react-router-dom'

export interface FinishFormProps {
  name: string,
  dob: string,
  favouriteColour: FavourtieColor
  onSubmit(): void
}

export function FinishForm({name, dob, favouriteColour, onSubmit}: FinishFormProps) {
  return (
    <div>
      <h2>Finish</h2>
      <form onSubmit={onSubmit}>
        <table>
          <tr>
            <td><Link to="name">Name</Link></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><Link to="dob">D.O.B.</Link></td>
            <td>{dob}</td>
          </tr>
          <tr>
            <td><Link to="colour">Favourite Colour</Link></td>
            <td>{favouriteColour}</td>
          </tr>
        </table>
        <input type="submit"/>
      </form>
    </div>
  )
}