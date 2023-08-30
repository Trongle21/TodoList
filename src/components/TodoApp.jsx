// TodoApp.js
import { useState } from "react";
import TodoForm from "./TodoForm";
import FilterForm from "./FilterForm";
import TodoList from "./TodoList";
import Button from "./Button";
import ClearAll from "./ClearAll";
import FilterOption from "./FilterOption";

const TodoApp = () => {
  const [jobs, setJobs] = useState("");
  const [items, setItems] = useState(() => {
    const getTask = JSON.parse(localStorage.getItem("setTask"));
    return getTask ?? [];
  });

  const [edit, setEdit] = useState(null);
  const [edited, setEdited] = useState("");

  const handleAdd = () => {
    setItems((prev) => {
      const newTask = [...prev, jobs];
      localStorage.setItem("setTask", JSON.stringify(newTask));
      return newTask;
    });
    setJobs("");
  };

  const handleDelete = (id) => {
    const deleteTask = items.filter((_, i) => i !== id);
    localStorage.setItem("setTask", JSON.stringify(deleteTask));
    setItems(deleteTask);
  };

  const handleEdit = (index) => {
    setEdit(index);
    setEdited(items[index]);
  };

  const handleUpdate = (index) => {
    const updateItems = [...items];
    updateItems[index] = edited;
    localStorage.setItem("setTask", JSON.stringify(updateItems));
    setItems(updateItems);
    setEdit(null);
  };

  const handleDeleteAll = () => {
    localStorage.clear();
    setItems([]);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <div className="Todo-Form">
        {/* <input
          type="text"
          className="todo-input"
          value={jobs}
          onChange={(e) => setJobs(e.target.value)}
        /> */}
        <FilterOption
          type="text"
          className="todo-input"
          value={jobs}
          onChange={setJobs}
        />
        <Button variant="primary" textBox="Add" onClick={handleAdd} />
      </div>
      <FilterForm />
      <TodoList
        items={items}
        edit={edit}
        edited={edited}
        onSetEdited={setEdited}
        onHandleUpdate={handleUpdate}
        onHandleEdit={handleEdit}
        onHandleDelete={handleDelete}
      />
      <ClearAll itemCount={items.length} onClearAll={handleDeleteAll} />
    </div>
  );
};

export default TodoApp;
