import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />


            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/24524909?v=4" alt="Jander Stival"/>

                <strong>Jander Stival</strong>
                <span>Web Developer</span>
            </div>

            <footer className={styles.sidebar}>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
        
    );
}