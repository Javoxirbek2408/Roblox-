import React from 'react'
import { BoxOne } from './pages/BoxOne'
import { BoxTwo } from './pages/BoxTwo'
import { BoxThere } from './pages/BoxThere'
import { BoxFour } from './pages/BoxFour'

export const Main = () => {
  return (
    <div className='main  ' >
      <BoxOne />
      <BoxTwo />
      <BoxThere />
      <BoxFour />
    </div>
  )
}
