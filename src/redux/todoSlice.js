import { createSlice } from '@reduxjs/toolkit'

const initialState =[ { id: 1, title: 'todo1', completed: false },
{ id: 2, title: 'todo2', completed: false },
{ id: 3, title: 'todo3', completed: true },
{ id: 4, title: 'todo4', completed: false },
{ id: 5, title: 'todo5', completed: false }, ]

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo:(state,action)=>{
        const newTodo={
            id:Date.now(),
            title: action.payload.title,
            completed: false,
        }
        state.push(newTodo);
    },
  }
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;