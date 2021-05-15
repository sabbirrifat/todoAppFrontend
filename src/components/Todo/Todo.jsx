import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoCat from "./TodoCat";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    category_id: "",
    completed: "",
  });

  const submitUpdate = (value) => {
    let data = {
      name: value.name,
      category_id: value.category_id,
      completed: edit.completed,
    };
    updateTodo(edit.id, data);
    setEdit({
      id: null,
      name: "",
      category: "",
      completed: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} handleUpdate={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className={todo.completed ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div>{todo.name}</div>
          <TodoCat catId={todo.category_id} />
          <div className="icons">
            {!todo.completed ? (
              <RiCheckboxCircleLine
                onClick={() => completeTodo(todo._id, todo)}
                className="delete-icon"
              />
            ) : null}

            <RiCloseCircleLine
              onClick={() => removeTodo(todo._id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => {
                console.log("category in edit: ", todo.category_id);
                setEdit({
                  id: todo._id,
                  name: todo.name,
                  category_id: todo.category_id,
                  completed: todo.completed,
                });
              }}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
