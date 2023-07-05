import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: 'Jander Doidao',
      role: 'Web Developer'
    },
    content:[
      { type: 'paragrath', content: ' galeraa 👋', },
      { type: 'paragrath', content: 'ei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-11T08:14:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Myke Tyson',
      role: 'Lutador'
    },
    content:[
      { type: 'paragrath', content: ' galeraa 👋', },
      { type: 'paragrath', content: 'ei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-26T08:21:00'),
  },
];	


// athor: { avatar_url: '', name: '',role'' }
// publishedAt: Date
// content: string


export function App() {
  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return ( 
            <Post
             author={post.author}
             key={post.id}
             content={post.content}
             publishedAt={post.publishedAt}
             
            />
          )
      })}
      </main>

    </div>


    </div>
  )
}


