import type { DateRangeParams, ISODateString } from "@/shared/types/date";

export interface Customer {
	id: number;
	name: string;
	count: number;
	totalAmount: number;
}

export interface Pagination {
	limit: number;
	page: number;
	total: number;
	totalPages: number;
}

export interface CustomerList {
	data: Customer[];
	pagination: Pagination;
}

export type CustomerListParams = DateRangeParams & {
	sortBy?: "asc" | "desc";
	name?: string;
	page?: number;
	limit?: number;
};

export interface CustomerPurchaseDetail {
	date: ISODateString;
	quantity: number;
	product: string;
	price: number;
	imgSrc: string;
}
