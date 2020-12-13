import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos:[],
    todoStatusList:[],
    todoCategoryList:[],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos,action.payload]
    },
    deleteTodo: (state, action) => {
      const tobeDeletedId = action.payload.todoId
      state.todos = state.todos.filter(todo=>{
        return todo.id!== tobeDeletedId
      })
    },
    updateTodo: (state, action) => {
      const tobeUpdated = action.payload
      state.todos = state.todos.map(todo=>{
        if(todo.id === tobeUpdated.id){
          return tobeUpdated
        }else{
          return todo
        }
      })
    },
    updateTodos:(state, action)=>{
      const filtered = [];
      state.todos = [...state.todos,...action.payload].map(todo=>{
        if(filtered.every(item=>item.id !==  todo.id )){
          filtered.push(todo)
          return todo
        }else{
          return null
        }
      }).filter(item=>!!item)
    },
    setTodoCategoryList:(state, action)=>{
      state.todoCategoryList = action.payload
    },
    setTodoStatusList:(state, action)=>{
      state.todoStatusList = action.payload
    }
  },
});

export const { addTodo,deleteTodo,updateTodo,updateTodos,setTodoCategoryList, setTodoStatusList} = todosSlice.actions;

export default todosSlice.reducer;
export const selectTodos = state =>  state.todos.todos;
export const selectTodoStatusList = state =>  state.todos.todoStatusList;
export const selectTodoCategoryList = state =>  state.todos.todoCategoryList;

export const getTodosAsync = () =>async  dispatch => {
  const response = await axios.get(`http://localhost:3000/todos`)
  dispatch(updateTodos(response.data));
};


export const getTodoStatusListAsync = () => async dispatch => {
  const response = await axios.get(`http://localhost:3000/todoStatusList`)
  dispatch(setTodoStatusList(response.data));
};


export const getTodoCategoryListAsync = () => async dispatch => {
  const response = await axios.get(`http://localhost:3000/todoCategoryList`)
  dispatch(setTodoCategoryList(response.data));
};

export const addTodoAsync = todo => async (dispatch,getState) => {
  const stateBefore = getState()
  const existingTodos = stateBefore.todos.todos
  const newId = existingTodos.length + 1
  const response = await axios.post(`http://localhost:3000/todos`,{...todo,id:newId})
  dispatch(addTodo(response.data));
};

export const updateTodoAsync = todo => async dispatch => {
  const response = await axios.put(`http://localhost:3000/todos/${todo.id}`,todo)
  dispatch(updateTodos([response.data]));
};

export const deleteTodoAsync = todoId => async dispatch => {
  await axios.delete(`http://localhost:3000/todos/${todoId}`)
  dispatch(deleteTodo({todoId}));
};



