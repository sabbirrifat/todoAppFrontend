import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function TodoForm(props) {
  const [values, setValues] = useState({
    name: props.edit ? props.edit.name : "",
    category: props.edit ? props.edit.category_id : "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateDefaultCategory = () => {
    if (!props.edit && props.categories.length) {
      setValues({
        name: "",
        category: props.categories[0]._id,
      });
    }
  };

  useEffect(() => {
    updateDefaultCategory();
  }, [props.categories]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.name) {
      props.onSubmit({
        name: values.name,
        category_id: values.category,
        completed: false,
      });
      updateDefaultCategory();
    } else {
      alert("Your input field is empty please write something");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (values.name) {
      props.handleUpdate({
        name: values.name,
        category_id: values.category,
      });
      setValues({
        name: "",
        category: "",
      });
    } else {
      alert("Your input field is empty please write something");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={values.name}
            onChange={handleChange}
            name="name"
            className="todo-input edit"
          />
          <select
            className="todo-select"
            name="category"
            id="category"
            value={values.category}
            onChange={handleChange}
          >
            {props.categories.map((item, key) => {
              return (
                <option key={key} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <button onClick={handleUpdate} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={values.name}
            onChange={handleChange}
            name="name"
            className="todo-input"
          />
          <select
            className="todo-select"
            name="category"
            id="category"
            value={values.category}
            onChange={handleChange}
          >
            {props.categories.map((item, key) => {
              return (
                <option key={key} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps)(TodoForm);
