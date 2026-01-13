import { useQuery } from "@tanstack/react-query";
import { getPurchases } from "@/apis/purchase";
import type { DateRangeParams } from "@/shared/types/date";

export const usePurchases = (params?: DateRangeParams) => {
	return useQuery({
		queryKey: ["purchases", params],
		queryFn: () => getPurchases(params),
	});
};
