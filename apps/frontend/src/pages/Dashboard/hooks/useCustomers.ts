import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "@/apis/customer";
import type { CustomerListParams } from "@/apis/customer/type";

export const useCustomers = (params?: CustomerListParams) => {
	return useQuery({
		queryKey: ["customers", params],
		queryFn: () => getCustomers(params),
		throwOnError: true,
	});
};
