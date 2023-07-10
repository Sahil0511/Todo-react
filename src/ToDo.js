import React, { useEffect, useState } from "react";
import "./index.css";

const getData = () => {
  const lists = localStorage.getItem("toDo");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const ToDo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getData());
  const [isUpdate, setIsUpdate] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);

  const enter = (e) => {
    if (e.keyCode === 13) {
      addItems();
    }
  };

  const addItems = () => {
    if (!input) {
      alert("Please enter a valid item");
    } else if (input && toggleBtn) {
      setItems(
        items.map((currElem) => {
          if (currElem.id === isUpdate) {
            return { ...currElem, name: input };
          }
          return currElem;
        })
      );
      setIsUpdate("");
      setInput("");
      setToggleBtn(false);
    } else {
      const newInput = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItems([...items, newInput]);
      setInput("");
    }
  };

  const removeAll = () => {
    setItems([]);
  };

  const deleteItem = (index) => {
    const selectedItem = items.filter((currElem) => {
      return currElem.id !== index;
    });
    setItems(selectedItem);
  };

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(items));
  }, [items]);

  const updateItem = (index) => {
    const updatedList = items.find((currElem) => {
      return currElem.id === index;
    });
    setIsUpdate(index);
    setInput(updatedList.name);
    setToggleBtn(true);
  };

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
              value={input}
              onKeyDown={enter}
              onChange={(e) => setInput(e.target.value)}
            />
            {toggleBtn ? (
              <i
                className="far fa-edit add-btn"
                aria-hidden="true"
                onClick={addItems}
              ></i>
            ) : (
              <i
                className="fa fa-plus add-btn"
                aria-hidden="true"
                onClick={addItems}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((currElem) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      aria-hidden="true"
                      onClick={() => updateItem(currElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      aria-hidden="true"
                      onClick={() => deleteItem(currElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
