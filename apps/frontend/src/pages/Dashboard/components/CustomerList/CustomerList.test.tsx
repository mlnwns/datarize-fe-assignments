import { QueryClientProvider } from "@tanstack/react-query";
import { screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as customerApi from "@/apis/customer";
import {
	createTestQueryClient,
	renderWithQueryClient,
} from "@/shared/test/renderWithQueryClient";
import CustomerList from "./CustomerList";

vi.mock("@/apis/customer");

describe("CustomerList 통합 테스트", () => {
	const mockOnCustomerSelect = vi.fn();
	const defaultProps = {
		from: "2025-10-01",
		to: "2025-12-31",
		onCustomerSelect: mockOnCustomerSelect,
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("고객이 없을 때 빈 상태 메시지를 표시해야 한다", async () => {
		const mockData = {
			data: [],
			pagination: {
				limit: 10,
				page: 1,
				total: 0,
				totalPages: 0,
			},
		};

		vi.mocked(customerApi.getCustomers).mockResolvedValue(mockData);

		renderWithQueryClient(<CustomerList {...defaultProps} />);

		await waitFor(() => {
			expect(screen.getByText("고객 목록이 없습니다.")).toBeInTheDocument();
		});
	});

	it("날짜 범위가 변경되면 새로운 데이터를 요청해야 한다", async () => {
		const mockData = {
			data: [{ id: 1, name: "곽민준", count: 5, totalAmount: 100000 }],
			pagination: {
				limit: 10,
				page: 1,
				total: 1,
				totalPages: 1,
			},
		};

		vi.mocked(customerApi.getCustomers).mockResolvedValue(mockData);

		const { rerender } = renderWithQueryClient(
			<CustomerList {...defaultProps} from="2025-10-01" to="2025-11-15" />,
		);

		await waitFor(() => {
			expect(customerApi.getCustomers).toHaveBeenCalledWith(
				expect.objectContaining({
					from: "2025-10-01",
					to: "2025-11-15",
				}),
			);
		});

		// 날짜 범위 변경
		rerender(
			<QueryClientProvider client={createTestQueryClient()}>
				<CustomerList {...defaultProps} from="2025-11-16" to="2025-12-31" />
			</QueryClientProvider>,
		);

		await waitFor(() => {
			expect(customerApi.getCustomers).toHaveBeenCalledWith(
				expect.objectContaining({
					from: "2025-11-16",
					to: "2025-12-31",
				}),
			);
		});
	});
});
