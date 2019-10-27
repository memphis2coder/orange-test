import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    // store items in a array
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // addItem method
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    // clear out value
    this._inputElement.value = "";

    e.preventDefault();
  }

  // delete method
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoList">
        <div className="container">
          <div className="header">
            <h1 className="p-3">Todo List</h1>
            <form onSubmit={this.addItem} className="input-group">
              <input
                ref={a => (this._inputElement = a)}
                type="text"
                className="form-control"
                placeholder="Enter item here..."
              ></input>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
          <TodoItem entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
