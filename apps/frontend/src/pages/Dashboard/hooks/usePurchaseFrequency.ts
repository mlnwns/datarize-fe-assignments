import { useSuspenseQuery } from "@tanstack/react-query";
import { getPurchaseFrequency } from "@/apis/purchase";
import type { DateRangeParams } from "@/shared/types/date";

export const usePurchaseFrequency = (params?: DateRangeParams) => {
	return useSuspenseQuery({
		queryKey: ["purchaseFrequency", params],
		queryFn: () => getPurchaseFrequency(params),
	});
};
