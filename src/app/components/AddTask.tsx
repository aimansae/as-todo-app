import React, { FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TodoProps } from "./TodoList";

type AddPRops = {
  onAddTask: (task: TodoProps) => void;
};

const AddTask = ({ onAddTask }: AddPRops) => {
  const [newTask, setNewTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const task: TodoProps = {
      id: Date.now(),
      title: newTask,
      description: description,
      isDone: false,
    };
    setNewTask("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task" id="task">
          Task
        </label>
        <input
          type="text"
          value={newTask}
          name="task"
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
        />
        <label htmlFor="descrption" id="description">
          Description
        </label>
        <input
          type="text"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="inster description..."
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => console.log("clicked")}
        >
          Add new task
          <AiOutlinePlus size={18} />
        </button>
      </form>
    </>
  );
};

export default AddTask;
