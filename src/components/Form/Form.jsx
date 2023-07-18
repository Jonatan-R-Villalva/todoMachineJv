import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <form>
        <label htmlFor="">Escribe tu nueva tarea</label>
        <textarea
        placeholder='Escribe una nueva tarea'/>
        <div className='form-button-container'>
            <button className='form-button form-button-cancel'>
                Cancelar
            </button>
            <button className='form-button form-button-add'>
                Agregar
            </button>
        </div>
    </form>
  )
}
