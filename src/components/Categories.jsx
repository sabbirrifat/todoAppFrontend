import React, { useState } from "react";
import { connect } from "react-redux";
import CategoryForm from "./CategoryForm";
import { addCategory, deleteCategory, updateCategory } from "../Redux/Categories/categoryAction";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Categories = ({
  categories,
  addCategory,
  updateCategory,
  deleteCategory,
}) => {
  const [edit, setEdit] = useState({});

  return (
    <>
      <h1>Categories</h1>
      <CategoryForm addCategory={addCategory} />
      {Object.keys(edit).length ? (
        <CategoryForm
          edit={edit}
          addCategory={addCategory}
          updateCategory={updateCategory}
          updateEdit={setEdit}
        />
      ) : null}
      {categories.length && !Object.keys(edit).length ? (
        <>
          {categories.map((item, key) => {
            return (
              <div className={"todo-row"} key={key}>
                <div>{item.name}</div>
                <div className="icons">
                  <RiCloseCircleLine
                    onClick={() =>
                      deleteCategory({ id: item._id })
                    }
                    className="delete-icon"
                  />
                  <TiEdit
                    onClick={() => {
                      setEdit(item);
                    }}
                    className="edit-icon"
                  />
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (data) => dispatch(addCategory(data)),
  updateCategory: (id, data) => dispatch(updateCategory(id, data)),
  deleteCategory: (data) => dispatch(deleteCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
