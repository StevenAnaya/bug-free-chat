import React from 'react';
import { render } from 'test/utils/customRender';

import { StyledChatMessage } from 'components/ChatMessage';

import 'jest-styled-components';

describe('[ChatMessage]', () => {
	test('Render a no viewed ChatMessage Component', () => {
		const { container } = render(<StyledChatMessage>Some Text</StyledChatMessage>);

		expect(container.firstChild).toMatchSnapshot();
	})

	test('Render a viewed ChatMessage Component', () => {
		const { container } = render(<StyledChatMessage viewed>Some Text</StyledChatMessage>);

		expect(container.firstChild).toMatchSnapshot();
	})
});
