import React, { useContext, useState } from 'react'
import './Form.css'
import { Context } from '../../Context/Context'

export default function Form() {
const [newTodoValue, setNewTodoValue] = useState('');
const {addTodo,setOpenModal} = useContext(Context)
const onSubmit = (e)=>{
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
}

const onCancel = (e)=>{
    e.preventDefault();
    setOpenModal(false);
}

const onChange = (e)=>{
   setNewTodoValue(e.target.value)

}
  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="">Escribe tu nueva tarea</label>
        <textarea
        placeholder='Escribe una nueva tarea'
        value={newTodoValue}
        onChange={onChange}/>
        <div className='form-button-container'>
            <button type='button' 
            className='form-button form-button-cancel'
            onClick={onCancel}>
                Cancelar
            </button>
            <button className='form-button form-button-add'>
                Agregar
            </button>
        </div>
    </form>
  )
}
