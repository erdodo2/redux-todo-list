//actionları burada tanımlıyoruz
export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo,
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id,
    }
}
export const completeTodo = (id) => {
    return {
        type: "COMPLETE_TODO",
        payload: id,
    }
}
