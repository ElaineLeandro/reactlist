import { useState } from "react";

export function todoList(){
 
  const [list, setList] = useState([{
    id:1,
    name:"bola",
    done: true,
  },{
    id:2,
    name:"pizza",
    done: false,
  }]);

   const handleAdd = () =>{
    console.log(handleAdd)
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
  }
}