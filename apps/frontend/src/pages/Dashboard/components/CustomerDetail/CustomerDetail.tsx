import type { Customer } from "@/apis/customer/type";
import { useCustomerPurchases } from "@/pages/Dashboard/hooks/useCustomerPurchases";
import type { DateRangeParams } from "@/shared/types/date";
import { formatKoreanPrice } from "@/shared/utils/price";
import * as S from "./CustomerDetail.styled";

interface CustomerDetailProps {
	customer: Customer | null;
	from: DateRangeParams["from"];
	to: DateRangeParams["to"];
}

function CustomerDetail({ customer, from, to }: CustomerDetailProps) {
	const { data, isLoading, isError } = useCustomerPurchases(customer?.id, {
		from,
		to,
	});

	const purchases = data ?? [];

	const renderContent = () => {
		if (!customer) {
			return (
				<S.EmptyText>
					고객 목록에서 상세 정보를 확인 할 고객을 선택해주세요.
				</S.EmptyText>
			);
		}

		if (isLoading) {
			return <S.LoadingText>구매 내역을 불러오는 중</S.LoadingText>;
		}

		if (isError) {
			return <S.ErrorText>구매 내역을 불러오는데 실패했습니다.</S.ErrorText>;
		}

		return (
			<S.ContentArea>
				<S.PurchaseList>
					{purchases.map((purchase, index) => {
						const isFirstOfDate =
							index === 0 || purchase.date !== purchases[index - 1].date;
						return (
							<S.PurchaseOrder
								key={`${purchase.date}-${purchase.product}-${index}`}
							>
								{isFirstOfDate && <S.DateHeader>{purchase.date}</S.DateHeader>}
								<S.PurchaseItem>
									<S.ProductImage
										src={purchase.imgSrc}
										alt={purchase.product}
									/>
									<S.ProductInfo>
										<S.ProductName>{purchase.product}</S.ProductName>
										<S.ProductMeta>
											구매 수량: {purchase.quantity}개
										</S.ProductMeta>
									</S.ProductInfo>
									<S.ProductPriceContainer>
										<S.ProductPrice>
											<S.PriceLabel>제품 가격</S.PriceLabel>
											<S.PriceValue>
												{formatKoreanPrice(purchase.price)}
											</S.PriceValue>
										</S.ProductPrice>
										<S.ProductPrice>
											<S.PriceLabel>총 금액</S.PriceLabel>
											<S.TotalPriceValue>
												{formatKoreanPrice(purchase.price * purchase.quantity)}
											</S.TotalPriceValue>
										</S.ProductPrice>
									</S.ProductPriceContainer>
								</S.PurchaseItem>
							</S.PurchaseOrder>
						);
					})}
				</S.PurchaseList>
			</S.ContentArea>
		);
	};

	return <S.Container>{renderContent()}</S.Container>;
}

export default CustomerDetail;
