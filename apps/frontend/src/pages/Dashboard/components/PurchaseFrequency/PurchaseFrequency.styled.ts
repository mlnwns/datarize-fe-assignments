import styled from "@emotion/styled";

export * from "@/shared/styles/table.styled";

export const FrequencyBarWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
`;

export const FrequencyPercent = styled.span`
	min-width: 2.5rem;
	font-size: 0.95rem;
	font-weight: 600;
`;

export const FrequencyBarBackground = styled.div`
	flex: 1;
	height: 0.75rem;
	background: transparent;
	border-radius: 6px;
	overflow: hidden;
	position: relative;
`;

export const FrequencyBar = styled.div<{ percent: number }>`
	height: 100%;
	background: #FFD600;
	border-radius: 6px;
	width: ${({ percent }) => percent}%;
`;
