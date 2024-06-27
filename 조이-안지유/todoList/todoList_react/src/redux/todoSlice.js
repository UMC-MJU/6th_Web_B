import {createSlice} from "@reduxjs/toolkit";

let nextId = 0;
const initialState = [];

export const todoSlice = createSlice({
  name: 'todoFunction',
  initialState,
  reducers: {
    add: (state, action) => { // 할 일 입력창에 입력되는 텍스트 값
      nextId++;
      state.push({
        id: nextId,
        text: action.payload,
        complete: false,
      });
    },
    remove: (state, action) => { // 선택된 할 일을 제외한 모든 할 일을 새로운 객체로 리턴
      return state.filter((e) => e.id !== action.payload);
    },
    complete: (state, action) => { // 선택된 할 일을 true 값으로 변경
      return state.map((e) => e.id === action.payload ? {...e, complete: !e.complete} : e);
    }
  }
});
export const {add, remove, complete} = todoSlice.actions;
export default todoSlice.reducer;
