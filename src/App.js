import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import TodoList from "./components/Todo/TodoList";
import Categories from "./components/Category/Categories";
import { connect } from "react-redux";
import { getTodo } from "./Redux/Todo/todoAction";
import { getCategories } from "./Redux/Categories/categoryAction";
import { FaCircleNotch } from "react-icons/fa";

function App({ todoList, getTodo, categories, getCategories, loading }) {
  const [toggleRoute, setToggleRoute] = useState("todo");
  let history = useHistory();

  const handleRoute = () => {
    if (toggleRoute === "category") {
      history.push("/");
      setToggleRoute("todo");
    } else if (toggleRoute === "todo") {
      history.push("/categories");
      setToggleRoute("category");
    }
  };

  useEffect(() => {
    if (!todoList.length) {
      getTodo();
    }
    if (!categories.length) {
      getCategories();
    }
  }, []);

  return (
    <div className="todo-app">
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
      <div className="toggle-route" onClick={handleRoute}>
        {toggleRoute === "category"
          ? "To-Do List"
          : toggleRoute === "todo"
          ? "Categories"
          : ""}
      </div>
      {loading ? <FaCircleNotch className="spinner" /> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todo.todoList,
  loading: state.todo.loading,
  categories: state.category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getTodo: () => dispatch(getTodo()),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
