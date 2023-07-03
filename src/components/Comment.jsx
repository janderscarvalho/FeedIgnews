import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { set } from 'date-fns';
import { useState } from 'react';

export function Comment ({content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        setLikeCount(likeCount + 1);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }
     
    return (
        <div className={styles.comment}> 
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/24524909?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                            <strong>Devon</strong>
                            <time title="11 de maio ás 08:13h" dateTime='2021-05-11T08:13:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} weight='fill'/>
                        </button>

                    </header>
                    
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}