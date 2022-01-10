import React, { useState, useEffect, useNavigate } from "react";

import "./Todos.css";
import Edit from "./Edit";
import icon from "./icon.png";

export const getLocalData = () => {
  const list = localStorage.getItem("mytodolist");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todos = () => {
  const [inputdata, setInputdata] = useState("");
  const [prioritydata, setPrioritydata] = useState("");

  const [items, setItems] = useState(getLocalData());
  const [itemmpriority, setItempriority] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const addItem = () => {
    if (!inputdata || !prioritydata) {
      alert("Please type Todo or select priority");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata, prioritydata
      };
      setItems([...items, myNewInputData]);
      setItempriority([...itemmpriority, prioritydata]);
      setInputdata("");
      setPrioritydata("");
    }
  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  // useEffect(() => {
  //   localStorage.setItem("my", JSON.stringify(prioritydata));
  // }, [items]);

  //  const deleteItem = (index) => {
  //    const updatedItems = items.filter((curElem) => {
  //      return curElem.id !== index;
  //    });
  //    setItems(updatedItems);
  //  }

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    })
    setInputdata(item_todo_edited.name);
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    })
    setItems(updatedItem)
  };

  const removeAll = () => {
    localStorage.removeItem("mytodolist")
    // localStorage.clear();
    // window.location.reload();
  };

  return (
    <>
      <div className="Todos_main">
        <div className="child_div">
          <div className="intro">
            <span id="intro_todo">Add Todo</span>
            <span id="intro_priority">Add Priority</span>
          </div>
          <input
            type="text"
            placeholder="Add Todo"
            id="form_input"
            value={inputdata}
            onChange={(event) => setInputdata(event.target.value)}
          />

          <select
            name="Course"
            id="priority"
            value={prioritydata}
            onChange={(event) => setPrioritydata(event.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button className="Todos_add_button" onClick={addItem}>
            Add
          </button>
        </div>
        <div className="Edit_child_div">
          <div className="Edit_intro">
            <span id="Edit_intro_edit">
              Click <i class="far fa-edit"></i> To Edit
            </span>
            <span id="Edit_intro_delete">
              Click <i class="far fa-trash-alt"></i> To Delete
            </span>
          </div>
        </div>

        <hr />

        <div className="showItems">
          {items.filter((curElem) => {
            if(searchTerm == ""){
              return curElem
            } else if(curElem.name.includes(searchTerm)) {
              console.log(curElem.name)
              return curElem
            }
          }).map((curElem, indx) => {
            return (
              <>
                <div className="eachItem" key={curElem.id}>
                  <img src={icon} alt="todo" />
                  <h5>
                    {curElem.name}

                    <small>{curElem.prioritydata}</small>
                  </h5>
                  <div className="icons">
                    <i class="far fa-edit"></i>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => deleteItem(curElem.id)}></i>
                  </div>
                </div>
              </>
            );
          })}

          <br />
        </div>

        <input
            type="text"
            placeholder="Search Here"
            id="search_input"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        
       

        <button className="removeall" onClick={removeAll}>
          Clear List
        </button>
        
      </div>
    </>
  );
};

export default Todos;
