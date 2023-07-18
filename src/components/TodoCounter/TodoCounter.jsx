import { useContext } from 'react'
import './TodoCounter.css'
import { Context } from '../../Context/Context'

export default function TodoCounter() {
  const {completeTodos,totalTodos} = useContext(Context)
  if(totalTodos === completeTodos && totalTodos.length === 0 && completeTodos.length === 0){
    return(
      <h1 className='todoCounter'>Felicidades!!! Has completado todas las tareas</h1>
    )}else{
      return (
        <h1 className='todoCounter'>Has completado <span>{completeTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
      )
  }
}
