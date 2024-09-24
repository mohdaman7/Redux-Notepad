import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name:'notes',
    initialState:[],
    reducers:{
        addNote:((state,action)=>{
            state.push(action.payload)
        }),
        deleteNote:(state,action) => {
            return state.filter((index)=>index !== action.payload)
        },
        editNote:(state,action) => {

       }
    },
    

})


export const {addNote,deleteNote,editNote} = notesSlice.actions;
export default notesSlice.reducer;

