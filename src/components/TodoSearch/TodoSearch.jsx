import React, { useContext } from 'react'
import './TodoSearch.css'
import { Context } from '../../Context/Context'

export default function TodoSearch() {
  const {searchValue,setSearchValue} = useContext(Context)
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
