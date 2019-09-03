import React from 'react';
import styled from 'styled-components';

const ViewWrapper = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ViewWrapper;

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 56rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
