import React, { Component } from "react";
import ClassDelete from "./ClassDelete";
import Count from "./Count";
import Edit from "./Edit";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          index: 1,
          text: "Just some demo tasks",
          tempText: "Just some demo tasks",
          isEdit: false,
        },
        {
          index: 2,
          text: "As an example",
          tempText: "As an example",
          isEdit: false,
        },
      ],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({
        index: Date.now(),
        text: state.inputVal,
        tempText: state.inputVal,
        isEdit: false,
      }),
      inputVal: "",
    }));
  }

  handleDelete = (todoItem) => {
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.index !== todoItem.index),
      };
    });
  };

  handleEdit = (todoItem) => {
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === todoItem.index
            ? { ...todo, temoText: todo.text, isEdit: true }
            : todo,
        ),
      };
    });
  };

  handleReSubmmit = (todoItem) => {
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === todoItem.index
            ? { ...todo, text: todo.tempText, isEdit: false }
            : todo,
        ),
      };
    });
  };
  handleCancel = (todoItem) => {
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === todoItem.index
            ? { ...todo, tempText: todo.text, isEdit: false }
            : todo,
        ),
      };
    });
  };

  handleEditInputChange = (todoItem, e) => {
    const value = e.target.value;
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === todoItem.index ? { ...todo, tempText: value } : todo,
        ),
      };
    });
  };

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count todos={this.state.todos}></Count>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            if (!todo.isEdit) {
              return (
                <li key={todo.index}>
                  {todo.text}{" "}
                  <ClassDelete
                    todo={todo}
                    onClick={() => this.handleDelete(todo)}
                  />
                  <Edit
                    isEdit={false}
                    handleEdit={() => this.handleEdit(todo)}
                  />
                </li>
              );
            } else {
              return (
                <div className="edit" key={todo.index}>
                  <input
                    type="text"
                    name="task-edit"
                    value={todo.tempText}
                    onChange={(e) => this.handleEditInputChange(todo, e)}
                  />
                  <ClassDelete
                    todo={todo}
                    onClick={() => this.handleDelete(todo)}
                  />

                  <Edit
                    isEdit={true}
                    handleReSubmmit={() => this.handleReSubmmit(todo)}
                  />

                  <button onClick={() => this.handleCancel(todo)}>
                    Cancel
                  </button>
                </div>
              );
            }
          })}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
