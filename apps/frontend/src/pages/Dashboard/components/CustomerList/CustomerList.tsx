import { useState } from "react";
import type { Customer } from "@/apis/customer/type";
import { useCustomers } from "@/pages/Dashboard/hooks/useCustomers";
import Button from "@/shared/components/Button/Button";
import type { DateRangeParams } from "@/shared/types/date";
import { formatKoreanPrice } from "@/shared/utils/price";
import * as S from "./CustomerList.styled";

interface CustomerListProps {
	from: DateRangeParams["from"];
	to: DateRangeParams["to"];
	selectedCustomerId?: number;
	onCustomerSelect: (customer: Customer) => void;
}

export const CustomerList = ({
	from,
	to,
	selectedCustomerId,
	onCustomerSelect,
}: CustomerListProps) => {
	const [page, setPage] = useState(1);

	const { data, isLoading, isError } = useCustomers({
		from,
		to,
		page,
		limit: 10,
	});

	const customers = data?.data ?? [];
	const pagination = data?.pagination;

	const hasData = !isLoading && !isError && customers.length > 0;

	const renderContent = () => {
		if (isLoading) {
			return <S.LoadingText>고객 목록을 불러오는 중</S.LoadingText>;
		}

		if (isError) {
			return <S.ErrorText>고객 목록을 불러오는데 실패했습니다.</S.ErrorText>;
		}

		if (!customers.length) {
			return <S.EmptyText>고객 목록이 없습니다.</S.EmptyText>;
		}

		return (
			<S.Table>
				<S.TableHead>
					<tr>
						<S.TableHeadCell width="15%">ID</S.TableHeadCell>
						<S.TableHeadCell width="30%">고객명</S.TableHeadCell>
						<S.TableHeadCell width="25%">총 구매 횟수</S.TableHeadCell>
						<S.TableHeadCell width="30%">총 주문 금액</S.TableHeadCell>
					</tr>
				</S.TableHead>
				<S.TableBody>
					{customers.map((customer) => (
						<S.TableRow
							key={customer.id}
							isClickable={true}
							isSelected={selectedCustomerId === customer.id}
							onClick={() => onCustomerSelect(customer)}
						>
							<S.TableCell>{customer.id}</S.TableCell>
							<S.TableCell>{customer.name}</S.TableCell>
							<S.TableCell>{customer.count}건</S.TableCell>
							<S.TableCell>
								{formatKoreanPrice(customer.totalAmount)}
							</S.TableCell>
						</S.TableRow>
					))}
				</S.TableBody>
			</S.Table>
		);
	};

	return (
		<S.Container>
			<S.ContentArea>{renderContent()}</S.ContentArea>

			{hasData && pagination && (
				<S.PaginationContainer>
					<Button
						variant="secondary"
						onClick={() => setPage((p) => p - 1)}
						disabled={page === 1}
					>
						이전
					</Button>

					<S.PageInfo>
						{page} / {pagination.totalPages}
					</S.PageInfo>

					<Button
						variant="secondary"
						onClick={() => setPage((p) => p + 1)}
						disabled={page === pagination.totalPages}
					>
						다음
					</Button>
				</S.PaginationContainer>
			)}
		</S.Container>
	);
};
