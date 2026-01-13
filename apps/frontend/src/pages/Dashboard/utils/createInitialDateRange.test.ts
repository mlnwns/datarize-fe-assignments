import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createInitialDateRange } from "./createInitialDateRange";

describe("createInitialDateRange", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("현재 날짜로부터 3개월 전의 날짜 범위를 생성해야 한다", () => {
		const mockDate = new Date("2026-01-14T00:00:00.000Z");
		vi.setSystemTime(mockDate);

		const result = createInitialDateRange();

		expect(result.startDate).toBe("2025-10-14");
		expect(result.endDate).toBe("2026-01-14");
	});

	it("날짜를 ISO 형식(YYYY-MM-DD)으로 반환해야 한다", () => {
		const mockDate = new Date("2026-01-10T10:30:00.000Z");
		vi.setSystemTime(mockDate);

		const result = createInitialDateRange();

		expect(result.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
		expect(result.endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
	});

	it("연도를 넘어가는 경우도 올바르게 처리해야 한다", () => {
		const mockDate = new Date("2026-02-28T00:00:00.000Z");
		vi.setSystemTime(mockDate);

		const result = createInitialDateRange();

		expect(result.startDate).toBe("2025-11-28");
		expect(result.endDate).toBe("2026-02-28");
	});
});
