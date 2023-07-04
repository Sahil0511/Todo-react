import React from "react";
import "./index.css";

const ToDo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.jpg" alt="calender-logo" />
            <figcaption>Add Items</figcaption>
          </figure>
          <div className="addItems">
            <input
              className="form-control"
              type="text"
              placeholder="Add Items"
            />
            <i className="fa fa-plus add-btn" aria-hidden="true"></i>
          </div>

          <div className="showItems">
            <div className="eachItem">
              <h3>Mango</h3>
              <div className="todo-btn">
                <i className="far fa-edit add-btn" aria-hidden="true"></i>
                <i className="far fa-trash-alt add-btn" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
