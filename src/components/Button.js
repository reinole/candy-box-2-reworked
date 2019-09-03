import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
	background-color: white;
	padding: 1rem;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	margin: 1rem 0;

	&:hover {
		background-color: lightgray;
	}
`;
