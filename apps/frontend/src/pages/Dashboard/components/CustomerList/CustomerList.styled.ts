import styled from "@emotion/styled";
import { statusMessage } from "@/shared/styles/statusMessage.styled";
import { TableHeadCell } from "@/shared/styles/table.styled";

export * from "@/shared/styles/table.styled";

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const ContentArea = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
`;

export const PageInfo = styled.span`
	width: 3rem;
	text-align: center;
	font-size: 0.875rem;
`;

export const LoadingText = styled.p`
	${statusMessage}
	color: #868e96;
`;

export const ErrorText = styled.p`
	${statusMessage}
	color: #fa5252;
`;

export const EmptyText = styled.p`
	${statusMessage}
	color: #868e96;
`;

export const SortableTableHeadCell = styled(TableHeadCell)`
	cursor: pointer;
	user-select: none;
`;

export const SortHeadContent = styled.div`
	display: flex;
	align-items: center;
`;

export const SortHeadLabel = styled.span`
`;
