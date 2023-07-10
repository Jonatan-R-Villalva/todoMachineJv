import React from 'react'
import './TodoSearch.css'

export default function TodoSearch({searchValue,setSearchValue}) {
  return (
    <input 
    className='TodoSearch'
    placeholder='Busca una tarea'
    value={searchValue}
    onChange={(e)=>{
      setSearchValue(e.target.value)
    }}
    />
  )
}
