import { useState } from "react";
import type { Customer } from "@/apis/customer/type";
import { useCustomers } from "@/pages/Dashboard/hooks/useCustomers";
import Button from "@/shared/components/Button/Button";
import DeferredSpinner from "@/shared/components/Loading/DeferredSpinner";
import SearchBar from "@/shared/components/SearchBar/SearchBar";
import SortIcon from "@/shared/components/SortIcon/SortIcon";
import useDebounce from "@/shared/hooks/useDebounce";
import type { DateRangeParams } from "@/shared/types/date";
import { formatKoreanPrice } from "@/shared/utils/price";
import * as S from "./CustomerList.styled";

interface CustomerListProps {
	from: DateRangeParams["from"];
	to: DateRangeParams["to"];
	selectedCustomerId?: number;
	onCustomerSelect: (customer: Customer) => void;
}

function CustomerList({
	from,
	to,
	selectedCustomerId,
	onCustomerSelect,
}: CustomerListProps) {
	const [page, setPage] = useState(1);
	const [customerName, setCustomerName] = useState("");
	const [sortBy, setSortBy] = useState<"" | "asc" | "desc">("");

	const debouncedCustomerName = useDebounce({
		value: customerName,
	});

	const { data, isLoading } = useCustomers({
		from,
		to,
		page,
		limit: 10,
		name: debouncedCustomerName,
		sortBy: sortBy || undefined,
	});

	const customers = data?.data ?? [];
	const pagination = data?.pagination;

	const hasData = !isLoading && customers.length > 0;
	const isEmpty = !isLoading && customers.length === 0;

	const handleSortToggle = () => {
		setSortBy((prev) => (prev === "" ? "asc" : prev === "asc" ? "desc" : ""));
		setPage(1);
	};

	const handleCustomerNameChange = (value: string) => {
		setCustomerName(value);
		setPage(1);
	};

	const renderContent = () => {
		return (
			<>
				<SearchBar
					label="고객명 검색"
					placeholder="고객명 입력"
					value={customerName}
					onChange={handleCustomerNameChange}
				/>

				{isLoading && <DeferredSpinner />}

				{isEmpty && <S.EmptyText>고객 목록이 없습니다.</S.EmptyText>}

				{hasData && (
					<S.Table>
						<S.TableHead>
							<S.TableRow>
								<S.TableHeadCell width="15%">ID</S.TableHeadCell>
								<S.TableHeadCell width="30%">고객명</S.TableHeadCell>
								<S.TableHeadCell width="25%">총 구매 횟수</S.TableHeadCell>
								<S.SortableTableHeadCell width="30%" onClick={handleSortToggle}>
									<S.SortHeadContent>
										<S.SortHeadLabel>총 주문 금액</S.SortHeadLabel>
										<SortIcon direction={sortBy} />
									</S.SortHeadContent>
								</S.SortableTableHeadCell>
							</S.TableRow>
						</S.TableHead>
						<S.TableBody>
							{customers.map((customer) => (
								<S.TableRow
									key={customer.id}
									isClickable
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
				)}
			</>
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
}

export default CustomerList;
