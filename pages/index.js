import React, { useContext } from 'react'
import { TodoContext } from "../assets/data/TodoData"
import Layout from '../components/Layout'
import TodoItem from '../components/TodoItem'
import styles from '../styles/TodoItems.module.css'

const index = () => {
    const [todos] = useContext(TodoContext);

    return (
        <Layout keywords={'Todo list'} title={'Todo list'}>
            <ul className={styles.todosWrapper}>
                {todos.map(({ id, name, isComplete }) =>
                    <TodoItem
                        key={id}
                        id={id}
                        name={name}
                        isComplete={isComplete} />
                )}
            </ul>
        </Layout>
    )
}

export default index