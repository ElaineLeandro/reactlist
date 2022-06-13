import {Pencil, PlusCircle, Trash} from 'phosphor-react'
import { Box } from '../../components/Box'
import { TextInput } from '../../components/TextInput'
import styles from './home.module.css'

export function Home(){
  return(
    <section className={styles.home}>
      <Box>
        <TextInput/>
        <div className={styles.lista}>
        <ul className={styles.list}>
          <li>
            <label>
             
              <span className={styles.te}>...</span>
            </label>
            <div>
              <button className={styles.buttonAcao}>
                <Pencil size={16}/>
              </button>
              <button className={styles.buttonAcao}>
                <Trash size={16}/>
              </button>
            </div>

          </li>
        </ul>
      </div>
    
      </Box>
     
     
    </section>
  )
}