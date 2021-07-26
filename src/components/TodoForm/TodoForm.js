import React from "react";
//Components
//Styles
import styles from "./TodoForm.module.css"

function TodoForm() {
  return (
    <div>
      <form className={styles.Form} action="">
        <label className={styles.Label} for="Title">Title</label>
        <input className={styles.Input} type="text" id="Title" />
        <label className={styles.Label} for="Description">Description</label>
        <input className={styles.Input} type="textarea" id="Description" />
        <button className={styles.CreateBtn}>Create</button>
      </form>
    </div>
  );
}

export default TodoForm;
