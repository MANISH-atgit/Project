import React, { useState, useEffect, useNavigate } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Todos.css";
import { addTodo, deleteTodo, removeTodo, search } from "../../actions/index";
import icon from "./icon.png";
import todoReducers from "../../reducers/todoReducers";


const Todos = () => {
  const [inputData, setInputData] = useState("");
  const [priorityData, setPriorityData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // const [sortData, setSortData] = useState([]);

  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(list));
  }, [list]);

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
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />

          <select
            name="Course"
            id="priority"
            value={priorityData}
            onChange={(event) => setPriorityData(event.target.value)}
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
            className="Todos_add_button"
            onClick={() =>
              dispatch(
                addTodo(inputData, priorityData),
                setInputData(""),
                setPriorityData("")
              )
            }
          >
            Add
          </button>
        </div>
        <div className="Edit_child_div">
          <div className="Edit_intro">
            <span id="Edit_intro_delete">
              Click <i class="far fa-trash-alt"></i> To Delete
            </span>
          </div>
        </div>

        <hr />

        <div className="showItems">
          {list
            .filter((elem) => {
              // console.log(elem)
              if (searchTerm == "") {
                return elem;
              } else if (elem.data.name === searchTerm) {
               
                return elem;
              }
            })
            .map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <img src={icon} alt="todo" />
                  <h5>
                    {elem.data.name}
                    <small>{elem.data.priority}</small>
                  </h5>
                  <div className="icons">
                    <i
                      class="far fa-trash-alt"
                      title="delete todo"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
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

        

        <button className="removeall" onClick={() => dispatch(removeTodo())}>
          Clear List
        </button>
      </div>

    </>
  );
};

export default Todos;
