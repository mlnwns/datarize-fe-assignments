import logo from "@/assets/logo.png";
import DashboardSection from "./components/DashboardSection/DashboardSection";
import PurchaseFrequency from "./components/PurchaseFrequency/PurchaseFrequency";
import * as S from "./Dashboard.styled";

function Dashboard() {
	return (
		<S.Layout>
			<S.Header>
				<S.HeaderLogo src={logo} alt="데이터라이즈 로고" />
				<S.HeaderTitle>구매 데이터 대시보드</S.HeaderTitle>
			</S.Header>

			<DashboardSection
				title="구매 빈도"
				description="설정된 기간동안 구매된 상품의 가격대별 구매 빈도입니다."
			>
				<PurchaseFrequency />
			</DashboardSection>
		</S.Layout>
	);
}

export default Dashboard;
