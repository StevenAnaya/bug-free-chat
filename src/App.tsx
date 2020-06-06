import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from 'pages';

import theme from 'theme';

function App() {
	return (
		<BrowserRouter basename="/">
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
