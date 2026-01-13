import { useQuery } from "@tanstack/react-query";
import type { CustomerListParams } from "@/apis/customer/type";
import { getCustomers } from "../../../apis/customer";

export const useCustomers = (params?: CustomerListParams) => {
	return useQuery({
		queryKey: ["customers", params],
		queryFn: () => getCustomers(params),
	});
};
