import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { ButtonVariant } from "./Button";

const variantStyles = {
	primary: css`
		background: #f7ff91;
    border: 1px solid #dee62b;

		&:hover:not(:disabled) {
			background: #e8f080;
		}
	`,
	secondary: css`
		background: #fff;
    border: 1px solid #c1c8cd;

		&:hover:not(:disabled) {
			background: #e9ecef;
		}
	`,
	retry: css`
		background: #fff;
		border: 1px solid #ffc9c9;
		color: #c92a2a;
		&:hover:not(:disabled) {
			background: #ede9e9;
		}
	`,
};

export const Button = styled.button<{ variant: ButtonVariant }>`
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-size: 0.875rem;
	
	cursor: pointer;
	transition: background-color 0.2s ease;

	${({ variant }) => variantStyles[variant]}

	&:disabled {
		background: #adb5bd;
		color: #fff;
		cursor: not-allowed;
		border: 1px solid #adb5bd;
	}
`;
