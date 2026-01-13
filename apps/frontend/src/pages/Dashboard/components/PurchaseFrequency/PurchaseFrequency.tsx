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

	return (
		<S.Table>
			<S.TableHead>
				<S.TableRow>
					<S.TableHeadCell>가격대</S.TableHeadCell>
					<S.TableHeadCell>구매빈도</S.TableHeadCell>
				</S.TableRow>
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
