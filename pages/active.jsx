import { useContext } from 'react';
import { TodoContext } from '../assets/data/TodoData';
import styles from '../styles/TodoItems.module.css'
import Layout from '../components/Layout'
import TodoItem from '../components/TodoItem'




const active = () => {
    const [todos, setTodos] = useContext(TodoContext);

    const notCompletedTodos = todos.filter(todo => todo.isComplete === false)


    const checkComplete = itemId => {
        let newTodos = [...todos];
        newTodos.forEach(todo => {
            if (itemId === todo.id) {
                todo.isComplete = !todo.isComplete
            }
        });
        setTodos(newTodos);
    }

    const editValue = (editValue, id) => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            if ( id === todo.id ) {
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
        <Layout keywords={'Active todo'} title={'Active todo'}>
            <ul className={styles.todosWrapper}>
                {notCompletedTodos.map(({ id, name, isComplete }) =>
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

export default active