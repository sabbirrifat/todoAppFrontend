import React, { useState } from "react";

const CategoryForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.name : "");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCategory({ name: input });
    setInput("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let data = {name: input};
    props.updateCategory(props.edit._id, data);
    props.updateEdit({});
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="name"
            className="todo-input edit"
          />
          <button onClick={handleUpdate} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a category"
            value={input}
            onChange={handleChange}
            name="name"
            className="todo-input"
          />
          <button onClick={handleSubmit} className="todo-button">
            Add Category
          </button>
        </>
      )}
    </form>
  );
};

export default CategoryForm;
