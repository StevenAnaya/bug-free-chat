export * from '@testing-library/react';

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/index';
const AllTheProviders = (props: any) => {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const customRender = (ui: any, options?: any) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
