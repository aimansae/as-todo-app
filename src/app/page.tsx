'use client'

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

const Home = () => {
  const [tasks, setTasks] = useState([{
    id: 1,
    description: "i need to do tis within 5 weeks",
    title: "Read react docs",
    isDone: false,
  }]);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList tasks={tasks} />

    </div>
  );
};

export default Home;
