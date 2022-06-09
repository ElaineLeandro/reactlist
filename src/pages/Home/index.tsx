import {PlusCircle, Trash} from 'phosphor-react'
import styles from './home.module.css'

export function Home(){
  return(
    <section className="context">
      <header>
      <div className="topo">
        <input
         type="text"
          placeholder="Adicione uma nova tarefa"/>
          <button>
            <PlusCircle/>
          </button>
      </div>
      </header>
      <main>
        <ul>
          <li>
            <label>
              <input type="checkbox"/>
              <span className={styles.context}>Terefa 1</span>
            </label>
            <button className={styles.button}>
              <Trash/>
            </button>
          </li>
        </ul>
      </main>
    
    </section>
  )
}