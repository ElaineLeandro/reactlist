import { useState } from "react";
import { generateId } from '../../utils/generateId'

export function todoList(){
  const [textInput, setTextInput] = useState('');
 
  const [list, setList] = useState([{
    id:1,
    name:"bola",
    done: true,
  },{
    id:2,
    name:"pizza",
    done: false,
  }]);
  console.log("Lista",list)
  console.log("Oi", textInput)

   const handleAdd = () =>{
    const newItem = { id:generateId(), name: textInput, done:false};
    setList([...list, newItem]);
    setTextInput('')

  };
  

  const handleEdit = () =>{
    console.log(handleEdit)
  };

  const handleDone = () =>{
    console.log(handleDone)
  };

  const handleDelete = () =>{
    console.log(handleDelete)
  };
   
  

  return { 
    list,
    handleAdd,
    handleEdit,
    handleDone,
    handleDelete,
    textInput,
    setTextInput
  }
}