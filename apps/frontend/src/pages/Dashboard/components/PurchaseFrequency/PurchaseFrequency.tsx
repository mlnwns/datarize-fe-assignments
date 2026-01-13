import { usePurchaseFrequency } from "@/pages/Dashboard/hooks/usePurchaseFrequency";
import type { DateRangeParams } from "@/shared/types/date";
import { formatPriceRange } from "@/shared/utils/price";
import * as S from "./PurchaseFrequency.styled";

interface PurchaseFrequencyProps {
	from: DateRangeParams["from"];
	to: DateRangeParams["to"];
}

function PurchaseFrequency({ from, to }: PurchaseFrequencyProps) {
	const { data } = usePurchaseFrequency({ from, to });
	const totalCount = data.reduce((acc, cur) => acc + cur.count, 0);

	return (
		<S.Table>
			<S.TableHead>
				<S.TableRow>
					<S.TableHeadCell width="20%">가격대</S.TableHeadCell>
					<S.TableHeadCell width="25%">구매빈도</S.TableHeadCell>
					<S.TableHeadCell width="50%">비율</S.TableHeadCell>
				</S.TableRow>
			</S.TableHead>
			<S.TableBody>
				{data.map((item) => {
					const percent = totalCount
						? Math.round((item.count / totalCount) * 100)
						: 0;
					return (
						<S.TableRow key={item.range}>
							<S.TableCell>{formatPriceRange(item.range)}</S.TableCell>
							<S.TableCell>{item.count}회</S.TableCell>
							<S.TableCell>
								<S.FrequencyBarWrapper>
									<S.FrequencyPercent>{percent}%</S.FrequencyPercent>
									<S.FrequencyBarBackground>
										<S.FrequencyBar percent={percent} />
									</S.FrequencyBarBackground>
								</S.FrequencyBarWrapper>
							</S.TableCell>
						</S.TableRow>
					);
				})}
			</S.TableBody>
		</S.Table>
	);
}

export default PurchaseFrequency;
