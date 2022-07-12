import { CodesandboxLogo } from "phosphor-react";
import { useState } from "react";
import { TaskItem } from "../../components/TaksItem";
import { generateId } from '../../utils/generateId'
import { useDataBase } from "../useDataBase";

type listaType = {
 id: number;
 name: string;
 done: boolean;
}[]

export function todoList(){
  // const [taksDone , setTeksDone] = useState<ITaskItem>([])
  const {saveData, searchData} = useDataBase()
  const [textInput, setTextInput] = useState('');
 
  const [list, setList] = useState <listaType>([]);
  
  console.log("Lista",list)
  console.log("Oi", textInput)

  /** */
   const handleAdd = () =>{
    if(!textInput){ 
       return
      }
    const newItem = {id:generateId(), name: textInput, done:false,};
    const newlist = [...list, newItem]
    setList(newlist);
    saveData('lista', newlist);
    setTextInput('')
  };
    

  const handleEdit = () =>{
 
  };

  const handleDone = (id: number) =>{
     const updatedList = list.map((taskItem)=>{
       if(taskItem.id === id){
        console.log("ValorI",taskItem)
          taskItem.done = !taskItem.done;
          console.log("ValorAtu",taskItem)
          // Outra opção que pode ser aplicado e o mesmo para no return...
          // return {
          //   ...taskItem, done: true
          // }
       } 
       return taskItem;
     })
     saveData('lista', updatedList);
     setList(updatedList)

  };
  
    /** Está função é a exclusão da lista de tarefas */
  const handleDelete = (id:number) =>{
      const newList = list.filter(item => {
      if(item.id !== id){
        return true;
      } 
      return false;
    })
    saveData('lista', newList);
    setList(newList);
    //const newList = list.filter(item => item.id !== id) outra alternativa.
  };

  const onInit = () => {
    //Esta função para carrega para pagina os dados salvo no localStorage.
    // Pega 
    //execução ao inicar só quando ser chamada
    
    const onIniData =  searchData("lista");
    if(onIniData?.length) {
      setList(onIniData) 
    }

   //Outra forma de verificar se é array!
    //Array.isArray(onIniData)
    //Array.isArray(onIniData) && onIniData.length > 0
  
  }
  console.log(handleDelete)
   

  return { 
    list,
    handleAdd,
    handleEdit,
    handleDone,
    handleDelete,
    textInput,
    setTextInput,
    onInit
    
  }
}