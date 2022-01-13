import Todos from "../components/pages/Todos";
import { getLocalData } from "../components/pages/Todos";

const initialData = {
  list: JSON.parse(localStorage.getItem("mytodolist"))??[], 
  text:''
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };


    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
        return {
            ...state,
            list: []
        };

    default:
      return state;
  }
};

export default todoReducers;
