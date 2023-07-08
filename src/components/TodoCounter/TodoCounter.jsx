import React from 'react'
import './TodoCounter.css'

export default function TodoCounter({total,completed}) {

  return (
    <h1 className='todoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
  )
}
