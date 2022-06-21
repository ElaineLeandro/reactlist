import { Box } from '../../components/Box'
import { TaskItem} from '../../components/TaksItem'
import { TextInput } from '../../components/TextInput'
import { todoList } from '../../hooks/todoList'
import styles from './home.module.css'


export function Home(){
  const {list}= todoList()
  return(
    <section className={styles.home}>
      <Box>
        <TextInput/>
        {list.map(item =>{
          return (<TaskItem key={item.id} id={item.id} name={item.name} isComplete={item.done} />)
        })}
       
      </Box>
     
     
    </section>
  )
}