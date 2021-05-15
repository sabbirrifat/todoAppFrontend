import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  setTodoList,
  updateTodo,
  completeTodo,
} from "../../Redux/Todo/todoAction";

function TodoList({
  categories,
  todoList,
  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
}) {
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      {categories.length ? (
        <>
          <TodoForm onSubmit={addTodo} />
          {todoList.length ? (
            <Todo
              todos={todoList}
              completeTodo={completeTodo}
              removeTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ) : null}
        </>
      ) : (
        <h3>Please go to categories first and add some</h3>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todo.todoList,
  categories: state.category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  setTodoList: (data) => dispatch(setTodoList(data)),
  addTodo: (data) => dispatch(addTodo(data)),
  updateTodo: (id, data) => dispatch(updateTodo(id, data)),
  deleteTodo: (data) => dispatch(deleteTodo(data)),
  completeTodo: (id, data) => dispatch(completeTodo(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
