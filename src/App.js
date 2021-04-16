import React from "react";
// import Joke from "./components/Joke";
// import jokesData from "./data/jokesData";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: true,
    };
  }

  render() {
    const todoItems = todosData.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
