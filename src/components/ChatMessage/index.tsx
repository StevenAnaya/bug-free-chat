import styled from 'styled-components';

interface Props {
	isMine?: boolean;
}

export const StyledChatMessage = styled.div<Props>`
	/* DEFAULT DEFINITIONS */
	display: flex;
	align-items: center;
	width: fit-content;
	background-color: ${({ theme, isMine }) => isMine ? theme.color.lightPurple : theme.color.gray};
	min-height: 30px;
	padding: 2px 10px;
	border-radius: ${({ theme }) => theme.misc.bRadius};
	font-family: ${({ theme }) => theme.fonts.family};
	font-size: ${({ theme }) => theme.fonts.size.sm};
	color: ${({ theme, isMine }) => isMine ? theme.color.softGray : theme.color.darkGray};
`;
