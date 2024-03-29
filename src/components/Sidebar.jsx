import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar () {
    return (
        <>
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1642175068707-f6e8f45e874c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=250&q=60' alt='sidebar cover' 
            />
            
        <div className={styles.profile}>
        <Avatar src="https://github.com/gfatori.png" />

            <strong> Batata Frita</strong>
            <span> Web Developer </span>
        </div>
        <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
        </>
        
    );
}