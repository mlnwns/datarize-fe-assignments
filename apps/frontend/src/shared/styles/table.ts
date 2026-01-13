import styled from "@emotion/styled";

export const Table = styled.table`
	width: 100%;
	font-size: 0.875rem;
	table-layout: fixed;
`;

export const TableHead = styled.thead`
	background: #f8f9fa;
`;

export const TableHeadCell = styled.th<{ width?: string }>`
	padding: 0.75rem 1rem;
	text-align: left;
	font-weight: 600;
	color: #495057;
	border-bottom: 2px solid #dee2e6;
	width: ${({ width }) => width || "auto"};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr<{
	isClickable?: boolean;
	isSelected?: boolean;
}>`
	background: ${({ isSelected }) => (isSelected ? "#f7ff91" : "transparent")};
	cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

	&:hover {
		background: ${({ isSelected }) => (isSelected ? "#f7ff91" : "#f8f9fa")};
	}
`;

export const TableCell = styled.td`
	padding: 0.75rem 1rem;
	border-bottom: 1px solid #dee2e6;
	overflow: hidden; 
	text-overflow: ellipsis; 
	white-space: nowrap; 
`;
