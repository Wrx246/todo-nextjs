import React, { useContext } from 'react'
import { TodoContext } from "../assets/data/TodoData"
import Layout from '../components/Layout'
import TodoItem from '../components/TodoItem'
import styles from '../styles/TodoItems.module.css'

const index = () => {
    const [todos, setTodos] = useContext(TodoContext);

    const checkComplete = itemId => {
        let newTodos = [...todos];
        newTodos.forEach(todo => {
            if (todo.id === itemId) {
                todo.isComplete = !todo.isComplete
            }
        });
        setTodos(newTodos);
    }

    const editValue = (editValue, id) => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            if (id === todo.id) {
                todo.name = editValue
            }
        });
        setTodos(newTodos);
    }

    const onDeleteButton = (itemId) => {
        const newTodos = todos.filter(todo => todo.id !== itemId);
        setTodos(newTodos);
    }

    return (
        <Layout keywords={'Todo list'} title={'Todo list'}>
            <ul className={styles.todosWrapper}>
                {todos.map(({ id, name, isComplete }) =>
                    <TodoItem
                        key={id}
                        id={id}
                        name={name}
                        isComplete={isComplete}
                        onEditValue={editValue}
                        onDeleteButton={onDeleteButton}
                        onCheckComplete={checkComplete} />
                )}
            </ul>
        </Layout>
    )
}

export default index