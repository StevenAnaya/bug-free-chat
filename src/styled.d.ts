import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			darkPurple: string;
			normalPurple: string;
			softPurple: string;
			lightPurple: string;
			softGray: string;
			liveGreen: string;
			gray: string;
			darkGray: string;
		};
		fonts: {
			family: string;
			size: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xlg: string;
			}
		};
		misc: {
			bRadius: string;
		}
	}
}
