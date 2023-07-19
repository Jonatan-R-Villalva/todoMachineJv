import React, { useContext } from 'react'
import './CreateTodoButton.css'
import { Context } from '../../Context/Context';

export default function CreateTodoButton() {
  const {openModal, setOpenModal} = useContext(Context)
  const modalOpen = (e)=>{
    e.preventDefault();
    setOpenModal(!openModal);
}
  return (
    <button onClick={modalOpen} className='button'>+</button>
  )
}
