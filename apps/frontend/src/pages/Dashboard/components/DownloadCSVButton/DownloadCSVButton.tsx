import Button from "@/shared/components/Button/Button";
import type { DateRangeParams } from "@/shared/types/date";
import { usePurchases } from "../../hooks/usePurchases";
import {
	convertPurchasesToCSV,
	downloadCSV,
} from "../../utils/downloadPurchasesCSV";

interface DownloadCSVButtonProps {
	from: DateRangeParams["from"];
	to: DateRangeParams["to"];
}

function DownloadCSVButton({ from, to }: DownloadCSVButtonProps) {
	const { data, isLoading } = usePurchases({ from, to });
	const hasData = data && data.length > 0;

	const handleDownload = () => {
		if (!hasData) return;

		const csvContent = convertPurchasesToCSV(data);
		const filename = `구매내역_${from}_${to}.csv`;
		downloadCSV(csvContent, filename);
	};

	return (
		<Button onClick={handleDownload} disabled={isLoading || !hasData}>
			{isLoading ? "로딩 중" : "CSV 다운로드"}
		</Button>
	);
}

export default DownloadCSVButton;
