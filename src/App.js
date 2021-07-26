import React from "react";
import { Route, Switch } from "react-router-dom";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Todo />
      </Route>
    </Switch>
  );
}

export default App;
