import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    todo: [{
        id: 1,
        task: 'initial text',
    }],
    done:false
}

let todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask(state, action) {
            let task = {
               id: nanoid(),
               task:action.payload
            }
            state.todo.push(task)
        },
        deleteTask() {

        }
    }
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;