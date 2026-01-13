import * as S from "./SortIcon.styled";

interface SortIconProps {
	direction: "asc" | "desc" | "";
}

function SortIcon({ direction }: SortIconProps) {
	return (
		<S.IconWrapper>
			<S.Arrow active={direction === "asc"}>▲</S.Arrow>
			<S.Arrow active={direction === "desc"}>▼</S.Arrow>
		</S.IconWrapper>
	);
}

export default SortIcon;
