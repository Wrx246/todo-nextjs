import { useContext, useEffect, useState } from 'react';
import styles from '../styles/Input.module.css'
import { TodoContext } from '../assets/data/TodoData';
import useInput from '../hooks/useInput';

const Input = () => {
    const [todos, setTodos] = useContext(TodoContext)
    const [checkAll, setCheckAll] = useState(false);

    const [value, bind, reset] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === '') {
            return;
        }
        setTodos([...todos, { id: Date.now(), name: value, isComplete: false }]);
        reset()
    }

    useEffect(() => {
        if (!todos.length) {
            setCheckAll(false)
        }
    }, [todos])

    let onCompleteAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.isComplete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.checkboxWrapper}>
                <label className={styles.label} htmlFor="toggle">
                    <input
                        onChange={onCompleteAll}
                        className={styles.checkbox}
                        checked={checkAll}
                        type="checkbox"
                        id='toggle' />
                    <span className={styles.fake}></span>
                </label>
            </div>
            <input
                {...bind}
                className={styles.input}
                type='text'
                placeholder='What needs to be done?' />
        </form>
    )
}

export default Input