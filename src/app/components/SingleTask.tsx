import React from "react";
import { TodoProps } from "./TodoList";
type SingleTaskProp = {
  task: TodoProps;
};
const SingleTask = ({ task }: SingleTaskProp) => {
  return (
    <tr key={task.id}>
      <td></td>
      <td>{task.title}</td>
      <td>{task.description}</td>
    </tr>
  );
};

export default SingleTask;
