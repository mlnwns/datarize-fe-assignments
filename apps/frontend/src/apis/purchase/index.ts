import type { DateRangeParams } from "@/shared/types/date";
import { httpGet } from "../../shared/apis/http";
import type { Purchase, PurchaseFrequency } from "./type";

export async function getPurchaseFrequency(params?: DateRangeParams) {
	return httpGet<PurchaseFrequency[]>("/api/purchase-frequency", { params });
}

export async function getPurchases(params?: DateRangeParams) {
	return httpGet<Purchase[]>("/api/purchases", { params });
}
