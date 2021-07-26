import React from 'react'
//Components
import TodoCard from "../TodoCard/TodoCard";
import TodoForm from "../TodoForm/TodoForm";
//Styles
import styles from "./App.module.css";

const Todo = () => {
  return ( 
    <div classname={styles.container}>
      <div classname={styles.todocontainer}>
        <div classname={styles.titlecontainer}>
          <h1>to do</h1>
        </div>
        <div classname={styles.todocardcontainer}>
          <TodoCard />
        </div>
        <TodoForm />
      </div>
    </div>
  )
}

export default Todo;
