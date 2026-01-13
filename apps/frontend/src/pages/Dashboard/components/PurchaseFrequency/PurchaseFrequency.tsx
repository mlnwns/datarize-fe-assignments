import type { DateRangeParams } from "@/shared/types/date";
import { usePurchaseFrequency } from "../../hooks/usePurchaseFrequency";
import { formatPriceRange } from "../../utils/formatPriceRange";
import * as S from "./PurchaseFrequency.styled";

interface PurchaseFrequencyProps {
	from: DateRangeParams["from"];
	to: DateRangeParams["to"];
}

function PurchaseFrequency({ from, to }: PurchaseFrequencyProps) {
	const { data, isLoading, isError } = usePurchaseFrequency({ from, to });

	// TODO: 로딩 및 에러 상태 처리 개선 필요
	if (isLoading) {
		return <S.LoadingText>데이터를 불러오는 중...</S.LoadingText>;
	}

	if (isError) {
		return <S.ErrorText>데이터를 불러오는데 실패했습니다.</S.ErrorText>;
	}

	return (
		<S.Table>
			<S.TableHead>
				<tr>
					<S.TableHeadCell>가격대</S.TableHeadCell>
					<S.TableHeadCell>구매빈도</S.TableHeadCell>
				</tr>
			</S.TableHead>
			<S.TableBody>
				{data?.map((item) => (
					<S.TableRow key={item.range}>
						<S.TableCell>{formatPriceRange(item.range)}</S.TableCell>
						<S.TableCell>{item.count}회</S.TableCell>
					</S.TableRow>
				))}
			</S.TableBody>
		</S.Table>
	);
}

export default PurchaseFrequency;
