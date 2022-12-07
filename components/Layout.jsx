import Head from 'next/head'
import { useContext } from 'react'
import { TodoContext } from '../assets/data/TodoData'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Input from './Input'

const Layout = ({ children, keywords, title }) => {
    const [todos] = useContext(TodoContext);
    return (
        <main className={styles.layout}>
            <Head>
                <meta keywords={`todoList todo ${keywords}`}></meta>
                <title>{title}</title>
            </Head>
            <h1>todos</h1>
            <section className={styles.section}>
                <Input />
                <div className={styles.wrapper}>
                    {children}
                </div>
                {todos.length !== 0 ? <Footer /> : <></>}
            </section>
        </main>
    )
}

export default Layout