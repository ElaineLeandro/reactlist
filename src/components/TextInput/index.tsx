import styles from './textinput.module.css'
import{ PlusCircle } from 'phosphor-react'

export function TextInput(){
  return(
    <div className={styles.topo}>
    <input
    type="text"
      placeholder="Adicione uma nova tarefa"/>

      <button>
        <PlusCircle size={16} />
      </button>
      
  </div>
  )
}