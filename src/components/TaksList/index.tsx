import styles from './taskslist.module.css'
import {Pencil, Trash} from 'phosphor-react'

export function TaskList(){
  return (
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
  ) 
}