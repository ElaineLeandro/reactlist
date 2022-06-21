import styles from './tasksItem.module.css'
import {Pencil, Trash} from 'phosphor-react'

interface TaskItem{
  id:number;
  name: string;
  isComplete: boolean;
}

export function TaskItem({id, name, isComplete}: TaskItem){
   
 

  return (
    <div className={styles.lista}>
        <ul className={styles.list}>
          <li>
            <label>
              <span className={`${styles.text} ${isComplete && styles.isComplete}` }>{name}</span>
            </label>
            <div>
              <button title="Editar uma tarefa"className={styles.buttonAcao}>
                <Pencil size={16}/>
              </button>
              <button title="Deletar uma tarefa" className={styles.buttonAcao}>
                <Trash size={16}/>
              </button>
            </div>

          </li>
        </ul>
      </div>
  ) 
}