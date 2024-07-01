import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: 'todoFunction',
  initialState,
  reducers: {
    addTodo: (state, action) => { // 할 일 입력창에 입력되는 텍스트 값
      state.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    deleteTodo: (state, action) => { // 선택된 할 일을 제외한 모든 할 일을 새로운 객체로 리턴
      return state.filter((e) => e.id !== action.payload);
    },
    complete: (state, action) => { // 선택된 할 일을 true 값으로 변경
      return state.map((e) => e.id === action.payload ? {...e, complete: !e.complete} : e);
    }
  }
});

// reducer를 전역에서 사용하기 위해 slice 이름 뒤에 .actions를 붙여 export
export const {addTodo, deleteTodo, complete} = todoSlice.actions;
export default todoSlice.reducer;

console.log(todoSlice.actions);
