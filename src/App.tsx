import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledChatMessage } from 'components/ChatMessage';

import theme from 'theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			< StyledChatMessage>
				hola mundo
			</StyledChatMessage>
			< StyledChatMessage isMine>
				hola mundo AWADAWDAWDASDAW
			</StyledChatMessage>
		</ThemeProvider>
	);
}

export default App;
