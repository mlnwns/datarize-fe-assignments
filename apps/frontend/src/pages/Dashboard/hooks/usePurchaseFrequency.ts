import { useQuery } from "@tanstack/react-query";
import { getPurchaseFrequency } from "@/apis/purchase";
import type { DateRangeParams } from "@/shared/types/date";

export const usePurchaseFrequency = (params?: DateRangeParams) => {
	return useQuery({
		queryKey: ["purchaseFrequency", params],
		queryFn: () => getPurchaseFrequency(params),
	});
};
