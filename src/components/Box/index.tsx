import {ReactNode} from 'react';
import styles from './box.module.css'

type Boxpros ={
 children:ReactNode
}

export function Box( {children}:Boxpros){
  return(
    <div className={styles.box}>
      {children}
    </div>
  
  )
}