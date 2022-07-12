
export function useDataBase (){

  
  function saveData( key: string ,dataItem:unknown, ) {
    
     if(typeof dataItem === "object"){
       localStorage.setItem(key, JSON.stringify(dataItem));
       
     }
    console.log(saveData);
  }

  function searchData(key: string){
      try {
        return JSON.parse(localStorage.getItem(key) || '' );
      } catch (error) {
        return null
      } 

    //Outra maneira dde acessar o banco para epegar os dados

    //localStorage.lista
  }
  
  return{ 
    saveData,
    searchData,
  }
  
}