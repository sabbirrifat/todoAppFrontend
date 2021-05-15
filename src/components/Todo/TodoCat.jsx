import React, { useState, useEffect } from "react";
import Axios from "axios";

const TodoCat = (props) => {
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/category/getOneCategory/${props.catId}`
    )
      .then((res) => res.data)
      .then((data) => setCategoryName(data.name))
      .catch((err) => console.log("error: ", err));
  }, [props.catId]);

  return <div className="todo-cat">cat: {categoryName}</div>;
};

export default TodoCat;
