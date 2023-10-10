import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import SingleTask from "./SingleTask";
import AddTask from "./AddTask";


export type TodoProps = {
  id: number;
  description: string;
  title: string;
  isDone: boolean;
};

type TodoListProps = {
  tasks: TodoProps[];
};
const TodoList = ({ tasks }: TodoListProps) => {

    const [allTodos, setAlltodos] = useState([])



  return (
    
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </tbody>
     
 
    </Table>
    
    </div>
  );
};
export default TodoList;
