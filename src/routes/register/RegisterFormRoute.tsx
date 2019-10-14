import React, { useState } from 'react'
import { FavourtieColor } from '../../shapes/FavouriteColours'
import { Route, Switch, Redirect } from 'react-router'
import { NameForm } from './NameForm'
import { DobForm } from './DobForm'
import { FavouriteColourForm } from './FavouriteColorForm'
import { FinishForm } from './FinishForm'

export function RegisterFormRoute() {
  const [ name, setName ] = useState<string | null>(null)
  const [ dob, setDob ] = useState<string | null>(null)
  const [ favourtieColour, setFavourtieColour ] = useState<FavourtieColor | null>(null)

  return (
    <Route path="/register" 
      render={() => (
        <>
          <h1>Registration</h1>

          <Route path="/register" exact render={() => <Redirect to="/register/name" />} />

          <Switch>
            <Route path="/register/name" 
              render={({history}) => (
                <NameForm
                  name={name || ""}
                  onSubmit={v => {
                    setName(v)
                    history.push("/register/dob")
                  }}
                />
              )} 
            />
            <Route path="/register/dob" 
              render={({history}) => (
                <DobForm
                  dob={dob || ""}
                  onSubmit={v => {
                    setDob(v)
                    history.push("/register/colour")
                  }}
                />
              )} 
            />
            <Route path="/register/colour" 
              render={({history}) => (
                <FavouriteColourForm
                  colour={favourtieColour || FavourtieColor.Blue}
                  onSubmit={v => {
                    setFavourtieColour(v)
                    history.push("/register/finish")
                  }}
                />
              )} 
            />
            <Route path="/register/finish" 
              render={({history}) => (
                <FinishForm
                  name={name || ""}
                  dob={dob || ""}
                  favouriteColour={favourtieColour || FavourtieColor.Blue}
                  onSubmit={() => {}}
                />
              )} 
            />
          </Switch>
        </>
      )}
    />
  )
}