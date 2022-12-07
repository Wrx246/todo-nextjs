import { useContext, useRef, useState } from 'react'
import { TodoContext } from '../assets/data/TodoData'
import useHover from '../hooks/useHover'
import useInput from '../hooks/useInput'
import styles from '../styles/TodoItem.module.css'
import todoCheck from '../utils/todoCheck'
import todoDelete from '../utils/todoDelete'
import todoEdit from '../utils/todoEdit'

const TodoItem = ({ id, name, isComplete }) => {
    const [todos, setTodos] = useContext(TodoContext);
    const [onEdit, setOnEdit] = useState(false)

    const ref = useRef();
    const isHover = useHover(ref)

    const [value, bind] = useInput(name)

    const handleClick = () => {
        setOnEdit(true)
    }

    const handleChange = (e) => {
        if (e.key === 'Enter' && value) {
            todoEdit(todos, setTodos, value, id)
            setOnEdit(false)
        }
    }

    const checkComplete = () => {
        todoCheck(todos, setTodos, id)
    }

    const onHandleDelete = () => {
        todoDelete(todos, setTodos, id)
    }

    return (
        <li className={styles.itemWrapper} ref={ref}>
            <div className={styles.label}>
                {!onEdit &&
                    <label htmlFor={id}>
                        <input
                            value=""
                            className={styles.checkbox}
                            checked={isComplete}
                            onChange={checkComplete}
                            type="checkbox"
                            id={id} />
                        <span className={styles.fake}></span>
                    </label>
                }
            </div>
            <div className={styles.flexBox} onDoubleClick={handleClick}>
                {onEdit ?
                    <input
                        {...bind}
                        autoFocus
                        onKeyDown={handleChange}
                        className={styles.input}
                        type='text' />
                    : <p className={isComplete ? styles.completedItem : ''}>{name}</p>
                }
                {isHover && !onEdit &&
                    <button
                        type='button'
                        onClick={onHandleDelete}
                        className={styles.deleteButton}>x</button>
                }
            </div>
        </li>
    )
}

export default TodoItem