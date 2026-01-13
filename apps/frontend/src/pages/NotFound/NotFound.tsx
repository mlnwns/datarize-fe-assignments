import { useNavigate } from "react-router";
import Button from "@/shared/components/Button/Button";
import * as S from "./NotFound.styled";

function NotFound() {
	const navigate = useNavigate();
	return (
		<S.Container>
			<S.Title>404</S.Title>
			<S.Description>페이지를 찾을 수 없습니다.</S.Description>
			<Button variant="retry" onClick={() => navigate("/")}>
				메인 페이지로 이동
			</Button>
		</S.Container>
	);
}

export default NotFound;
