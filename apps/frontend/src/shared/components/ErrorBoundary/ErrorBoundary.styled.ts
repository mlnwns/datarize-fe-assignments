import styled from "@emotion/styled";

export const ErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	flex: 1;
	background: #fff3f3;
	border: 1px solid #ffc9c9;
	border-radius: 0.5rem;
`;

export const ErrorTitle = styled.h3`
	margin: 0 0 0.5rem 0;
	font-size: 1rem;
	font-weight: 600;
	color: #c92a2a;
`;

export const ErrorMessage = styled.p`
	margin: 0 0 1rem 0;
	font-size: 0.875rem;
	color: #495057;
	text-align: center;
`;
