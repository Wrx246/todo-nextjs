import { useState } from 'react'
import styles from '../styles/TodoItem.module.css'

const TodoItem = ({ id, name, isComplete, onCheckComplete, onEditValue, onDeleteButton }) => {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(name)
    const [onHover, setOnHover] = useState(false)

    const handleClick = () => {
        setOnEdit(true)
    }

    const handleEdit = () => {
        if (editValue) {
            onEditValue(editValue, id)
            setOnEdit(false)
        } else {
            setEditValue(name)
            setOnEdit(false)
        }
    }

    const handleChange = (e) => {
        if (e.key === 'Enter') {
            handleEdit()
        }
    }

    const checkComplete = () => {
        onCheckComplete(id)
    }

    const onHandleHover = () => {
        setOnHover(true)
    }

    const onHandleLeave = () => {
        setOnHover(false)
    }

    const onHandleDelete = () => {
        onDeleteButton(id)
    }


    return (
        <li className={styles.itemWrapper} onMouseOver={onHandleHover} onMouseLeave={onHandleLeave}>
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
                            value={editValue}
                            onKeyDown={handleChange}
                            onChange={e => setEditValue(e.target.value)}
                            className={styles.input}
                            type='text' />
                        : <p className={isComplete ? styles.completedItem : ''} onDoubleClick={handleClick}>{name}</p>
                }
                {onHover && <button type='button' onClick={onHandleDelete} className={styles.deleteButton}>x</button>}
            </div>
        </li>
    )
}

export default TodoItem