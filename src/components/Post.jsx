import styles from './Post.module.css';
import { Comment } from './Comment';


export function Post(props) {
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}src="https://avatars.githubusercontent.com/u/24524909?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio ás 08:13h" dateTime='2021-05-11T08:13:00'>Pulicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '} <a href=''>jane.design/doctorcare</a></p>
                <p> 
                    <a href=''>#novoprojeto </a>{' '}
                    <a href=''>#nlw </a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
                
            </div>

            <form className={styles.commentsForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder='Comente aqui...'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <

        </article>         
    );
}