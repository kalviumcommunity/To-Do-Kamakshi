import { Component } from "react";

export default class Input extends Component {
  render() {
    const { value, handleInputChange, addToDo } = this.props;
    return (
      <form className="input" onSubmit={addToDo}>
        <input type="text" value={value} onChange={handleInputChange} placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
    );
  }
}