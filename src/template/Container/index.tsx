import {ReactNode} from 'react';
import {Butterfly, PencilLine} from 'phosphor-react';
import styles from './container.module.css';

type ContainerPropos={
  children: ReactNode
}


export function Container({children} : ContainerPropos){
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <PencilLine size={32}/>
          Lista de Tarefas
        </h1>
      </header>
      <section className={styles.section}>
        {children}
      </section>
      <footer className={styles.footer}>
        <p>
          <Butterfly/>
          Elaine Landro2022
        </p>
      </footer>

    </div>
  )
}