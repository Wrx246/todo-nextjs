import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Input from './Input'

const Layout = ({ children, keywords, title }) => {
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
            </section>
        </main>
    )
}

export default Layout