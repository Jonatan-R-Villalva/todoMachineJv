import React from 'react'
import './TodoList.css'

export default function TodoList({children}) {
  return (
    <ul className='TodoList'>
        {children}
    </ul>
  )
}
