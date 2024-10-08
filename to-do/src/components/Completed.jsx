import { Component } from "react";

export default class CompletedTasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        {tasks.length === 0 ? (
          <p>No items completed yet</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task.text}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}