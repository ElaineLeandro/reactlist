import { XCircle } from "phosphor-react";
import styles from './modalEdit.module.css';

type ModalEditProps ={
 modalState:string,
 modalRef?: string
}
export const ModalEdit = (props: ModalEditProps) =>  {
  const { modalState, modalRef } = props;

  return(
    <div ref={modalRef} className={`${styles[modalState]} ${styles.modal}`}>
      <div className={styles.modalContent}>
          <XCircle/>
          <p>Meu modal!</p>
      </div>
      </div>
  )
}