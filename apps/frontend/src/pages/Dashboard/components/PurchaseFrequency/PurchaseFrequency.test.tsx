import { screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as purchaseApi from "@/apis/purchase";
import { renderWithQueryClient } from "@/shared/test/renderWithQueryClient";
import PurchaseFrequency from "./PurchaseFrequency";

vi.mock("@/apis/purchase");

describe("PurchaseFrequency 통합 테스트", () => {
	const defaultProps = {
		from: "2025-10-01",
		to: "2025-12-31",
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("가격대별 구매 빈도를 테이블로 표시해야 한다", async () => {
		const mockData = [
			{ range: "0 - 20000", count: 15 },
			{ range: "20001 - 30000", count: 8 },
			{ range: "30001 - 50000", count: 5 },
			{ range: "50001 - 100000", count: 3 },
			{ range: "100001 - Infinity", count: 2 },
		];

		vi.mocked(purchaseApi.getPurchaseFrequency).mockResolvedValue(mockData);

		renderWithQueryClient(<PurchaseFrequency {...defaultProps} />);

		await waitFor(() => {
			expect(screen.getByText("가격대")).toBeInTheDocument();
			expect(screen.getByText("구매빈도")).toBeInTheDocument();
		});

		// 가격대 포맷팅 확인
		expect(screen.getByText("2만원 이하")).toBeInTheDocument();
		expect(screen.getByText("2만원 - 3만원")).toBeInTheDocument();
		expect(screen.getByText("3만원 - 5만원")).toBeInTheDocument();
		expect(screen.getByText("5만원 - 10만원")).toBeInTheDocument();
		expect(screen.getByText("10만원 이상")).toBeInTheDocument();

		// 구매 빈도 확인
		expect(screen.getByText("15회")).toBeInTheDocument();
		expect(screen.getByText("8회")).toBeInTheDocument();
		expect(screen.getByText("5회")).toBeInTheDocument();
		expect(screen.getByText("3회")).toBeInTheDocument();
		expect(screen.getByText("2회")).toBeInTheDocument();
	});

	it("빈 데이터일 때도 테이블 헤더는 표시해야 한다", async () => {
		const mockData: Array<{ range: string; count: number }> = [];

		vi.mocked(purchaseApi.getPurchaseFrequency).mockResolvedValue(mockData);

		renderWithQueryClient(<PurchaseFrequency {...defaultProps} />);

		await waitFor(() => {
			expect(screen.getByText("가격대")).toBeInTheDocument();
			expect(screen.getByText("구매빈도")).toBeInTheDocument();
		});

		// 데이터 행은 없어야 함
		expect(screen.queryByText("회")).not.toBeInTheDocument();
	});

	it("다양한 가격대 범위를 올바르게 포맷팅해야 한다", async () => {
		const mockData = [
			{ range: "0 - 10000", count: 5 },
			{ range: "10001 - 20000", count: 10 },
			{ range: "200001 - Infinity", count: 1 },
		];

		vi.mocked(purchaseApi.getPurchaseFrequency).mockResolvedValue(mockData);

		renderWithQueryClient(<PurchaseFrequency {...defaultProps} />);

		await waitFor(() => {
			expect(screen.getByText("1만원 이하")).toBeInTheDocument();
			expect(screen.getByText("1만원 - 2만원")).toBeInTheDocument();
			expect(screen.getByText("20만원 이상")).toBeInTheDocument();
		});
	});
});
