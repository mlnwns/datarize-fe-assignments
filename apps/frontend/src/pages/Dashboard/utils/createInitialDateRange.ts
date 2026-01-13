import type { ISODateString } from "@/shared/types/date";

export const createInitialDateRange = () => {
	const today = new Date();
	const threeMonthsAgo = new Date(today);
	threeMonthsAgo.setMonth(today.getMonth() - 3);

	const formatDate = (date: Date): ISODateString => {
		return date.toISOString().split("T")[0];
	};

	return {
		startDate: formatDate(threeMonthsAgo),
		endDate: formatDate(today),
	};
};
