import {ReactNode} from 'react';
import {Butterfly, PencilLine} from 'phosphor-react';
import styles from './container.module.css';
import { Box } from '../../components/Box';

type ContainerPropos={
  children: ReactNode
}


export function Container({children} : ContainerPropos){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <span><PencilLine size={32}/></span>
          <h1>
            Lista de Tarefas
          </h1>
        </div>   
      </header>
      <div className={styles.section}>
        {children}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerStyle}>
        <span> <Butterfly/></span>
        <p>Elaine Leandro-2022</p>
        </div>
      </footer>

    </div>
  )
}