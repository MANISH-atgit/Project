const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      
      const { id, data } = action.payload;
    
      const storage = localStorage.setItem("mytodolist", JSON.stringify(action.payload));
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

    case "SEARCH":

      const filteredList = state.list.filter((elem) => {
        if (action.search === "") {
          return elem;
        } else if (elem.name.includes(action.search)) {
          return elem;
        }})
        return {
           list: filteredList

        }

    // case "SORT":
    //   const sortArray = type => {
    //     const types = {
    //       id: 'id',
    //     };
    //     const sortProperty = types[type]
    //     const sorted = [...list].sort((a, b) => b[sortProperty] - a[sortProperty]);
    //     return {
    //       list: sorted
    //     }
    //   }

    default:
      return state;
  }
};

export default todoReducers;
