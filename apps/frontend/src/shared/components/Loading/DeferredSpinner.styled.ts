import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const Spinner = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border: 3px solid #787878;
	border-top: 3px solid #fff;
	border-radius: 50%;
	animation: ${spin} 0.8s linear infinite;
`;
