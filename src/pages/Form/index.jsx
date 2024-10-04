import React from 'react';
import styles from './styles.module.css';

const ReactForm = () => {
  console.log(styles)
  return (
    <section className={styles.formContainer}>
      <h1>Form</h1>
    </section>
  )
}

export default ReactForm