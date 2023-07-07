import React from 'react'

export default function TodoCounter({total,completed}) {

  return (
    <h1>Has completado {completed} de {total} TODOS</h1>
  )
}
