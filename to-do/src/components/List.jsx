import { Component } from "react";

export default class ToDoList extends Component {
  render() {
    const { tasks, deleteMethod, editMethod, toggleMethod } = this.props;
    const reversedTasks = [...tasks].reverse();
    return (
      <div className="items">
        {reversedTasks.map((item, index, array) => {
          const reversedIndex = array.length - 1 - index;
          return (
            <div className="item" key={reversedIndex}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleMethod(reversedIndex)}
              />
              <span>{item.text}</span>
              <div className="item-action">
                <button
                  className="delete"
                  onClick={() => deleteMethod(reversedIndex)}
                >
                  Delete
                </button>
                <button
                  className="edit"
                  onClick={() => editMethod(reversedIndex)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}