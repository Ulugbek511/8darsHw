import { combineReducer } from 'redux'
import taskReducer from './taskReducer'

const rootReducer = combineReducer({
    tasks: taskReducer
})

export default rootReducer