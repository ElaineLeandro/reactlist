import styles from './tasksItem.module.css'
import {CheckSquareOffset, Trash} from 'phosphor-react'

interface ITaskItem{
  id:number;
  name: string;
  isComplete: boolean;
  onDelete: (id:number) => void;
  onDone: (id:number) => void;
}

export function TaskItem({id, name, isComplete, onDelete,onDone}: ITaskItem){
   
 

  return (
      <div className={styles.lista}>
        <ul className={styles.list}>
          <li>
            <label>
              <span className={`${styles.text} ${isComplete && styles.isComplete}` }>{name}</span>
            </label>
            <div>
              <button 
               title="Editar uma tarefa"
               className={styles.buttonAcao} 
               onClick={() => onDone(id)}
              >
                <CheckSquareOffset size={16}/>
              </button>
              <button 
              title="Deletar uma tarefa" 
              className={styles.buttonAcao}
              onClick={()=> onDelete(id) }
              >
                <Trash size={16}/>
              </button>
            </div>

          </li>
        </ul>
      </div>
    
  
  ) 
}