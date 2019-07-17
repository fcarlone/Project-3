import React, { Fragment } from "react";
import "../../../../styles/todo/todoMenu.css";

class TodoMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      completed: 0,
      open: 0
    };
  }

  render() {
    return (
      <Fragment>
        <div className="menu-container">
          <h1 className="page-title">Checklist</h1>
          <h3 className="todo-content">
            Total Items: {this.props.items.length}
          </h3>

          <h3 className="todo-content">
            Completed: {this.state.completed}
          </h3>
          <h3 className="todo-content">
            Outstanding: {this.props.items.length - this.state.completed}{" "}
          </h3>
        </div>
      </Fragment>
    );
  }
}

export default TodoMenu;
