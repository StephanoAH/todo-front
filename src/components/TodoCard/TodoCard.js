// React
import React from "react";
//Components
//Styles
import styles from "./TodoCard.module.css"; 

function TodoCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <h2 className={styles.Title}>Title</h2>
        <p className={styles.Description}>Description</p>
      </div>
      <div className={styles.BtnContainer}>
        <button type="checkbox" className={styles.DoneBtn}>Done</button>
        <button className={styles.EditBtn}>Edit</button>
      </div>
    </div>
  );
}

export default TodoCard;
