import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
import { TodoContext } from "../assets/data/TodoData"
import styles from '../styles/Footer.module.css'

const Footer = () => {
    const { pathname } = useRouter()
    const [todos, setTodos] = useContext(TodoContext);

    const notCompleteTodos = todos.filter(todo => todo.isComplete === false).length
    const completeTodos = todos.filter(todo => todo.isComplete === true).length

    const paths = [
        {
            name: 'All',
            path: '/'
        },
        {
            name: 'Active',
            path: '/active'
        },
        {
            name: 'Completed',
            path: '/completed'
        }]

    let onDeleteButton = () => {
        const newTodos = todos.filter(todo => todo.isComplete === false);
        setTodos(newTodos);
    }

    return (
        <footer className={styles.footer}>
            <span>{notCompleteTodos} {notCompleteTodos === 1 ? 'item' : 'items'} left</span>
            <nav className={styles.linkBar}>
                {paths.map((item) => {
                    const active = item.path === pathname ? styles.active : '';
                    return (
                        <Link key={item.name} className={`${styles.link} ${active}`} href={item.path}>{item.name}</Link>
                    )
                })}
            </nav>
            <button
                onClick={onDeleteButton}
                className={!completeTodos ? styles.hideButton : styles.clearButton}
                type='button'>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer