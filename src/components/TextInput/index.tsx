import styles from './textinput.module.css'
import{ PlusCircle } from 'phosphor-react'

interface ITextInput {
  name: string;
  onChangeName: (value: string) => void;
  onAdd: () => void;
}

export function TextInput({name, onChangeName, onAdd} : ITextInput){
   
  return(
    
    <div className={styles.topo}>
    <input
    type="text"
      placeholder="Adicione uma nova tarefa"
      value={name}
      onChange={event => { 
        onChangeName(event.target.value)
      }}   
    />
      <button title="Adicionar um item"
       onClick={() => onAdd()}
      >
        <PlusCircle size={16} />
      </button>
      
  </div>
  )
}