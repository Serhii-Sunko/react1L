import React, { Component } from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import Modal from "../modal/Modal";
import { v4 as uuidv4 } from "uuid";

class Tasks extends Component {
  state = {
    tasks: [],
    isTaskFormOpen: false,
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isTaskFormOpen !== this.state.isTaskFormOpen) {
      return true;
    }
    if (nextState.tasks !== this.state.tasks) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    if (this.state.tasks !== prevState.tasks)
      this.setState((prev) => ({ tasks2: prev.tasks }));
  }

  addTask = (task) => {
    this.setState((prev) => ({
      tasks: [...prev.tasks, { ...task, id: uuidv4() }],
    }));
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
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default Tasks;
