import type { DateRangeParams } from "@/shared/types/date";
import { httpGet } from "../../shared/apis/http";
import type {
	CustomerListParams,
	CustomerListResponse,
	CustomerPurchaseDetail,
} from "./type";

export async function getCustomers(params?: CustomerListParams) {
	return httpGet<CustomerListResponse>("/api/customers", { params });
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
