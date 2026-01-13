import styled from "@emotion/styled";
import { statusMessage } from "@/shared/styles/statusMessage";

export * from "@/shared/styles/table";

export const Container = styled.div`
	margin-top: 1.5rem;
`;

export const Table = styled.table`
	width: 100%;
	font-size: 0.875rem;
`;

export const TableHead = styled.thead`
	background: #f8f9fa;
`;

export const TableHeadCell = styled.th`
	padding: 0.75rem 1rem;
	text-align: left;
	font-weight: 600;
	color: #495057;
	border-bottom: 2px solid #dee2e6;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
	&:hover {
		background: #f8f9fa;
	}
`;

export const TableCell = styled.td`
	padding: 0.75rem 1rem;
	border-bottom: 1px solid #dee2e6;
`;

export const LoadingText = styled.p`
	${statusMessage}
	color: #6c757d;
`;

export const ErrorText = styled.p`
	${statusMessage}
	color: #dc3545;
`;
