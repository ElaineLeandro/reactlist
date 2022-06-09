import {Pencil, PlusCircle, Trash} from 'phosphor-react'
import styles from './home.module.css'

export function Home(){
  return(
    <section className={styles.home}>
      <div className={styles.topo}>
        <input
         type="text"
          placeholder="Adicione uma nova tarefa"/>
          <button>
            <PlusCircle size={16} />
          </button>
      </div>
      
      <div className={styles.lista}>
        <ul className={styles.list}>
          <li>
            <label>
             
              <span className={styles.te}>...</span>
            </label>
            <div>
              <button className={styles.buttonAcao}>
                <Pencil size={16}/>
              </button>
              <button className={styles.buttonAcao}>
                <Trash size={16}/>
              </button>
            </div>

          </li>
        </ul>
      </div>
    
    </section>
  )
}