import styled from "@emotion/styled";
import { statusMessage } from "@/shared/styles/statusMessage.styled";

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const ContentArea = styled.div`
	flex: 1;
	overflow-y: auto;
	max-height: 31.25rem;
`;

export const EmptyText = styled.div`
	${statusMessage}
	color: #868e96;
`;

export const LoadingText = styled.p`
	${statusMessage}
	color: #868e96;
`;

export const ErrorText = styled.p`
	${statusMessage}
	color: #fa5252;
`;

export const PurchaseList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const PurchaseItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.75rem;
	border: 1px solid #e9ecef;
	border-radius: 0.5rem;
`;

export const ProductImage = styled.img`
	width: 3.75rem;
	height: 3.75rem;
	object-fit: cover;
	border-radius: 0.375rem;
	background: #f1f3f5;
`;

export const ProductInfo = styled.div`
	flex: 1;
	min-width: 0;
`;

export const ProductName = styled.p`
	margin: 0 0 0.25rem 0;
	font-weight: 600;
	font-size: 0.9375rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ProductMeta = styled.p`
	margin: 0;
	font-size: 0.8125rem;
	color: #868e96;
`;

export const ProductPriceContainer = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const ProductPrice = styled.div`
	text-align: right;
`;

export const PriceLabel = styled.p`
	margin: 0 0 0.25rem 0;
	font-size: 0.75rem;
	color: #868e96;
`;

export const PriceValue = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 0.9375rem;
`;

export const TotalPriceValue = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 0.9375rem;
	color: #e0b400;
`;

export const PurchaseOrder = styled.div`
`;

export const DateHeader = styled.div`
	font-weight: 600;
	margin: 0.75rem 0 0.25rem 0;
	font-size: 1rem;
`;
