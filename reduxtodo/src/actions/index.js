export const addTodo = (name, priority) => {
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




