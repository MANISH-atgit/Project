export const addTodo = (name, priority, list) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: {
                name: name,
                priority: priority
            }
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}

export const search = (search) => {
    return {
        type: "SEARCH",
        search
    }
}

// export const sort = (list) => {
//     return {
//         type: "SORT",
//         list
        
//     }
// }
