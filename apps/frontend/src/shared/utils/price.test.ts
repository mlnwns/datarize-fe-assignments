import { describe, expect, it } from "vitest";
import { formatKoreanPrice, formatPriceRange } from "./price";

describe("price 유틸", () => {
	describe("formatKoreanPrice", () => {
		it("숫자를 한국 원화 형식으로 포맷팅해야 한다", () => {
			expect(formatKoreanPrice(1000)).toBe("1,000원");
			expect(formatKoreanPrice(50000)).toBe("50,000원");
			expect(formatKoreanPrice(1234567)).toBe("1,234,567원");
		});

		it("0을 올바르게 포맷팅해야 한다", () => {
			expect(formatKoreanPrice(0)).toBe("0원");
		});
	});

	describe("formatPriceRange", () => {
		it('최소값이 0인 경우 "X만원 이하" 형태로 반환해야 한다', () => {
			expect(formatPriceRange("0 - 20000")).toBe("2만원 이하");
			expect(formatPriceRange("0 - 10000")).toBe("1만원 이하");
		});

		it('최대값이 Infinity인 경우 "X만원 이상" 형태로 반환해야 한다', () => {
			expect(formatPriceRange("100001 - Infinity")).toBe("10만원 이상");
			expect(formatPriceRange("50001 - Infinity")).toBe("5만원 이상");
		});

		it('일반 범위는 "X만원 - Y만원" 형태로 반환해야 한다', () => {
			expect(formatPriceRange("20001 - 30000")).toBe("2만원 - 3만원");
			expect(formatPriceRange("50001 - 100000")).toBe("5만원 - 10만원");
		});
	});
});
