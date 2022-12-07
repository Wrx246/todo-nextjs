import { useContext } from 'react';
import { TodoContext } from '../assets/data/TodoData';
import styles from '../styles/TodoItems.module.css'
import Layout from '../components/Layout'
import TodoItem from '../components/TodoItem'




const active = () => {
    const [todos] = useContext(TodoContext);

    const notCompletedTodos = todos.filter(todo => todo.isComplete === false)


    return (
        <Layout keywords={'Active todo'} title={'Active todo'}>
            <ul className={styles.todosWrapper}>
                {notCompletedTodos.map(({ id, name, isComplete }) =>
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

export default active