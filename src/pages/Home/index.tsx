import { Box } from '../../components/Box'
import { TaskList } from '../../components/TaksList'
import { TextInput } from '../../components/TextInput'
import styles from './home.module.css'

export function Home(){
  return(
    <section className={styles.home}>
      <Box>
        <TextInput/>
        <TaskList/>
      </Box>
     
     
    </section>
  )
}