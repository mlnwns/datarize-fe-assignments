import logo from "@/assets/logo.png";
import * as S from "./Dashboard.styled";

export default function Dashboard() {
	return (
		<S.Layout>
			<S.Header>
				<S.HeaderLogo src={logo} alt="데이터라이즈 로고" />
				<S.HeaderTitle>구매 데이터 대시보드</S.HeaderTitle>
			</S.Header>
		</S.Layout>
	);
}
