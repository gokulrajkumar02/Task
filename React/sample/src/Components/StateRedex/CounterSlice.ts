import { createSlice } from "@reduxjs/toolkit";
export type Student = {
    UserName : string,
    RollNumber : string,
    Date_of_birth : string,
    Skills : string[],
    Department : string,
    Password : string
}
type initialValue = {
    studentCount : number
    students : Record<string,Student>
}

const initialState : initialValue = {
    studentCount : 0,
    students : {}
}

const CounterSlice = createSlice({
    name : "Counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.studentCount += 1
        },
        incrementByAmount : (state , action) => {
            state.studentCount += action.payload
        },
        addStudent : (state ,action) => {
            state.students[action.payload.RollNumber] = action.payload;
            state.studentCount += 1
        }
    }
})

export const {increment , incrementByAmount, addStudent} = CounterSlice.actions

export default CounterSlice.reducer