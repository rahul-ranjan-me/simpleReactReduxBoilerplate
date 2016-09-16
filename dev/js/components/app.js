import React from 'react';
import UserList from '../containers/userList';
import UserDetail from '../containers/userDetail';
require('../../scss/style.scss');

const App = () => (
	<div>
		<h2>Username list</h2>
		<UserList />
		<hr />
		<h2>User details</h2>
		<UserDetail />
	</div>
);

export default App;