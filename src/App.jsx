import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          <Post author="Jander Doidao"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolorum, repudiandae consequuntur blanditiis culpa ex eius quidem laboriosam quibusdam totam? A perspiciatis ducimus consectetur placeat atque corporis maxime magni explicabo."
          />
          <Post author="Jander Malandro"
          content="um novo post"
          />
      </main>

    </div>


    </div>
  )
}


