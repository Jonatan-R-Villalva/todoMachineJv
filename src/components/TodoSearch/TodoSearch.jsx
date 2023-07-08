import React, { useState }from 'react'
import './TodoSearch.css'

export default function TodoSearch() {
  const [searchValue , setSearchValue] = useState('');
  return (
    <input 
    className='TodoSearch'
    placeholder='cortar cebolla'
    value={searchValue}
    onChange={(e)=>{
      setSearchValue(e.target.value)
    }}
    />
  )
}
