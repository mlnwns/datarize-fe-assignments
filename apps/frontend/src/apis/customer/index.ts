import type { DateRangeParams } from "@/shared/types/date";
import { httpGet } from "../../shared/apis/http";
import type {
	CustomerList,
	CustomerListParams,
	CustomerPurchaseDetail,
} from "./type";

export async function getCustomers(params?: CustomerListParams) {
	return httpGet<CustomerList>("/api/customers", { params });
}

export async function getCustomerPurchases(
	customerId: number,
	params?: DateRangeParams,
) {
	return httpGet<CustomerPurchaseDetail[]>(
		`/api/customers/${customerId}/purchases`,
		{ params },
	);
}
