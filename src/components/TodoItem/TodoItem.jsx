import './TodoItem.css'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
export default function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}>
          <FaCheck />{props.completed}
        </span>
        <p className={`TodoItem-p ${props.completed &&'TodoItem-p--complete'}`}>{props.text}</p>
        <span className={`Icon Icon-delete`}
        onClick={props.onDelete}
        >
          <AiOutlineClose />
        </span>
      </li>
    );
  }