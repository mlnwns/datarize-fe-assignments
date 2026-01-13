import { describe, expect, it } from "vitest";
import type { Purchase } from "@/apis/purchase/type";
import { convertPurchasesToCSV } from "./downloadPurchasesCSV";

describe("downloadPurchasesCSV", () => {
	describe("convertPurchasesToCSV", () => {
		it("구매 데이터를 CSV 형식으로 변환해야 한다", () => {
			const purchases: Purchase[] = [
				{
					date: "2026-01-14",
					customerName: "곽민준",
					productName: "노트북",
					price: 1500000,
					quantity: 1,
				},
				{
					date: "2026-01-15",
					customerName: "데이터",
					productName: "마우스",
					price: 30000,
					quantity: 2,
				},
			];

			const result = convertPurchasesToCSV(purchases);

			expect(result).toContain('"날짜","고객명","상품명","가격","수량"');
			expect(result).toContain('"2026-01-14","곽민준","노트북","1500000","1"');
			expect(result).toContain('"2026-01-15","데이터","마우스","30000","2"');
		});
	});
});
