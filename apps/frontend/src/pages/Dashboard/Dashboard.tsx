import { useState } from "react";
import type { Customer } from "@/apis/customer/type";
import logo from "@/assets/logo.png";
import type { ISODateString } from "@/shared/types/date";
import CustomerDetail from "./components/CustomerDetail/CustomerDetail";
import CustomerList from "./components/CustomerList/CustomerList";
import DashboardSection from "./components/DashboardSection/DashboardSection";
import DateRangePicker from "./components/DateRangePicker/DateRangePicker";
import DownloadCSVButton from "./components/PurchaseFrequency/DownloadCSVButton/DownloadCSVButton";
import PurchaseFrequency from "./components/PurchaseFrequency/PurchaseFrequency";
import * as S from "./Dashboard.styled";
import { createInitialDateRange } from "./utils/createInitialDateRange";

const initialDateRange = createInitialDateRange();

function Dashboard() {
	const [startDate, setStartDate] = useState<ISODateString>(
		initialDateRange.startDate,
	);
	const [endDate, setEndDate] = useState<ISODateString>(
		initialDateRange.endDate,
	);
	const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
		null,
	);

	return (
		<S.Layout>
			<S.Header>
				<S.HeaderLogo src={logo} alt="데이터라이즈 로고" />
				<S.HeaderTitle>구매 데이터 대시보드</S.HeaderTitle>
			</S.Header>

			<S.Content>
				<DateRangePicker
					startDate={startDate}
					endDate={endDate}
					onStartDateChange={setStartDate}
					onEndDateChange={setEndDate}
				/>

				<S.FrequencySectionWrapper>
					<DashboardSection
						title="구매 빈도"
						description="설정된 기간동안 구매된 상품의 가격대별 구매 빈도입니다."
						action={<DownloadCSVButton from={startDate} to={endDate} />}
					>
						<PurchaseFrequency from={startDate} to={endDate} />
					</DashboardSection>
				</S.FrequencySectionWrapper>

				<S.CustomerSectionWrapper>
					<DashboardSection
						title="고객 목록"
						description="설정된 기간동안 구매한 고객 목록입니다."
					>
						<CustomerList
							from={startDate}
							to={endDate}
							selectedCustomerId={selectedCustomer?.id}
							onCustomerSelect={setSelectedCustomer}
						/>
					</DashboardSection>

					<DashboardSection
						title="고객 상세"
						description="선택한 고객의 구매 내역입니다."
					>
						<CustomerDetail
							customer={selectedCustomer}
							from={startDate}
							to={endDate}
						/>
					</DashboardSection>
				</S.CustomerSectionWrapper>
			</S.Content>
		</S.Layout>
	);
}

export default Dashboard;
