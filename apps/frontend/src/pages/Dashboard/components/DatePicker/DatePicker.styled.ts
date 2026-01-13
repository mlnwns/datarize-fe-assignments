import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	gap: 1.5rem;
	padding: 1.5rem;
	background: #fff;
	border-radius: 1rem;
`;

export const DatePickerItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Label = styled.label`
	font-size: 0.875rem;
	font-weight: 600;
	color: #495057;
`;

export const Input = styled.input`
	padding: 0.5rem 0.75rem;
	border: 1px solid #dee2e6;
	border-radius: 0.5rem;
	font-size: 0.875rem;
	color: #212529;
	outline: none;

	&:focus {
		border-color: #a0a0a0;
		box-shadow: 0 0 0 1px rgba(160, 160, 160, 0.2);
	}
`;
