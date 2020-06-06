import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { StyledChatMessage } from 'components/ChatMessage';

const Router = () => {
	return (
		<Switch>
			<Route path={['/isNotMine/:id', '/other']} strict exact>
				<StyledChatMessage>
					hola mundo
				</StyledChatMessage>
			</Route>
			<Route path="/isMine" strict exact>
				<StyledChatMessage isMine>
					hola mundo
				</StyledChatMessage>
			</Route>
			<Route path="/" strict exact>
				<p>Home</p>
			</Route>
			<Route>
				<p>404 Not Found</p>
			</Route>
		</Switch >
	)
};

export default Router;
