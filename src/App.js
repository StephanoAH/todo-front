// React
import React from "react";
//Components
import TodoCard from "./components/TodoCard/TodoCard";
import TodoForm from "./components/TodoForm/TodoForm";
//Styles
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.TodoContainer}>
        <div className={styles.TitleContainer}>
          <h1>To Do</h1>
        </div>
        <div className={styles.TodoCardContainer}>
          <TodoCard />
        </div>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
