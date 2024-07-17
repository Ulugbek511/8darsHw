import taskReducer from "./reducer/taskReducer";
import { createStore } from 'redux'


const store = createStore(taskReducer)

export default store;