import React, { Component } from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import Modal from "../modal/Modal";

class Tasks extends Component {
  state = {
    tasks: [{ name: "Task1", description: "Hello" }],
    isTaskFormOpen: false,
  };
  addTask = (task) => {
    this.setState((prev) => ({ tasks: [...prev.tasks, task] }));
  };

  removeTask = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };
  onTaskFormOpen = () => {
    this.setState((prev) => ({ isTaskFormOpen: !prev.isTaskFormOpen }));
  };
  render() {
    return (
      <div>
        <hr />
        <button type="button" onClick={this.onTaskFormOpen}>
          OPEN
        </button>
        {this.state.isTaskFormOpen && (
          <Modal toggleModal={this.onTaskFormOpen}>
            <TaskForm
              addTask={this.addTask}
              toggleModal={this.onTaskFormOpen}
            />
          </Modal>
        )}
        <hr />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Tasks;
