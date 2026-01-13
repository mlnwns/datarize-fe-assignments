import { useState } from "react";
import logo from "@/assets/logo.png";
import type { ISODateString } from "@/shared/types/date";
import DashboardSection from "./components/DashboardSection/DashboardSection";
import DatePicker from "./components/DatePicker/DatePicker";
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

	return (
		<S.Layout>
			<S.Header>
				<S.HeaderLogo src={logo} alt="데이터라이즈 로고" />
				<S.HeaderTitle>구매 데이터 대시보드</S.HeaderTitle>
			</S.Header>

			<S.Content>
				<DatePicker
					startDate={startDate}
					endDate={endDate}
					onStartDateChange={setStartDate}
					onEndDateChange={setEndDate}
				/>

				<DashboardSection
					title="구매 빈도"
					description="설정된 기간동안 구매된 상품의 가격대별 구매 빈도입니다."
				>
					<PurchaseFrequency from={startDate} to={endDate} />
				</DashboardSection>
			</S.Content>
		</S.Layout>
	);
}

export default Dashboard;
