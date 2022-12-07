import { useRef, useState } from 'react'
import useHover from '../hooks/useHover'
import useInput from '../hooks/useInput'
import styles from '../styles/TodoItem.module.css'

const TodoItem = ({ id, name, isComplete, onCheckComplete, onEditValue, onDeleteButton }) => {
    const [onEdit, setOnEdit] = useState(false)

    const ref = useRef();

    const isHover = useHover(ref)

    const [value, bind, reset] = useInput(name)

    const handleClick = () => {
        setOnEdit(true)
    }

    const handleChange = (e) => {
        if (e.key === 'Enter' && value) {
            onEditValue(value, id)
            setOnEdit(false)
        }
    }

    const checkComplete = () => {
        onCheckComplete(id)
    }

    const onHandleDelete = () => {
        onDeleteButton(id)
    }


    return (
        <li className={styles.itemWrapper} ref={ref}>
            <label htmlFor={id} className={styles.label}>
                <input
                    value=""
                    className={styles.checkbox}
                    checked={isComplete}
                    onChange={checkComplete}
                    type="checkbox"
                    id={id} />
                <span className={styles.fake}></span>
            </label>
            <div className={styles.flexBox}>
                {
                    onEdit ?
                        <input
                            {...bind}
                            onKeyDown={handleChange}
                            className={styles.input}
                            type='text' />
                        : <p className={isComplete ? styles.completedItem : ''} onDoubleClick={handleClick}>{name}</p>
                }
                {isHover && <button type='button' onClick={onHandleDelete} className={styles.deleteButton}>x</button>}
            </div>
        </li>
    )
}

export default TodoItem