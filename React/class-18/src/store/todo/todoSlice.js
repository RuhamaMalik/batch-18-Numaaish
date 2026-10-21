import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    todo: [],
    done: false
}

let data = JSON.parse(localStorage?.getItem('tasks'))
initialState.todo = data || []


let todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask(state, action) {
            let task = {
                id: nanoid(),
                task: action.payload
            }
            state.todo.push(task)

            localStorage?.setItem('tasks', JSON.stringify(state.todo))
        },
        deleteTask(state, action) {
            console.log(action.payload);
            state.todo = state.todo?.filter((task) => task.id !== action.payload);
            localStorage?.setItem('tasks', JSON.stringify(state.todo))
        },
        updateTask(state, action) {
            state.todo = state.todo.map((oldTask, i) => {
                return oldTask?.id === action.payload?.id ? action.payload : oldTask
            })
            localStorage?.setItem('tasks', JSON.stringify(state.todo));
        }

    }
});

export const { addTask, deleteTask,updateTask } = todoSlice.actions;
export default todoSlice.reducer;