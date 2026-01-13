import { useQuery } from "@tanstack/react-query";
import { getCustomerPurchases } from "@/apis/customer";
import type { DateRangeParams } from "@/shared/types/date";

export const useCustomerPurchases = (
	customerId?: number,
	params?: DateRangeParams,
) => {
	return useQuery({
		queryKey: ["customerPurchases", customerId, params?.from, params?.to],
		queryFn: () => getCustomerPurchases(customerId as number, params),
		enabled: !!customerId,
		throwOnError: true,
	});
};
