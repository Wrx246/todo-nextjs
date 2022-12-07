import { useContext } from 'react'
import { TodoContext } from '../assets/data/TodoData'
import styles from '../styles/TodoItems.module.css'
import Layout from '../components/Layout'
import TodoItem from '../components/TodoItem'


const completed = () => {
    const [todos] = useContext(TodoContext)

    const completedTodos = todos.filter(todo => todo.isComplete === true)


    return (
        <Layout keywords={'Completed todo'} title={'Completed todo'}>
            <ul className={styles.todosWrapper}>
                {completedTodos.map(({ id, name, isComplete }) =>
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

export default completed