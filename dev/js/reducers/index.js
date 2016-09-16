import {combineReducers} from 'redux';
import UsersReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
	users: UsersReducer,
	activeUser : ActiveUserReducer
});

export default allReducers;