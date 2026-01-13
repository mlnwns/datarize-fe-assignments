import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as customerApi from "@/apis/customer";
import type { Customer } from "@/apis/customer/type";
import CustomerDetail from "./CustomerDetail";

vi.mock("@/apis/customer");

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

const renderWithQueryClient = (ui: React.ReactElement) => {
	const testQueryClient = createTestQueryClient();
	return render(
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
	);
};

describe("CustomerDetail 통합 테스트", () => {
	const mockCustomer: Customer = {
		id: 1,
		name: "곽민준",
		count: 5,
		totalAmount: 500000,
	};

	const defaultProps = {
		customer: mockCustomer,
		from: "2025-10-14",
		to: "2026-01-14",
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("고객이 선택되지 않았을 때 안내 메시지를 표시해야 한다", () => {
		renderWithQueryClient(
			<CustomerDetail customer={null} from="2025-10-14" to="2026-01-14" />,
		);

		expect(
			screen.getByText(
				"고객 목록에서 상세 정보를 확인 할 고객을 선택해주세요.",
			),
		).toBeInTheDocument();
	});

	it("고객의 구매 내역을 표시해야 한다", async () => {
		const mockPurchases = [
			{
				date: "2026-01-14",
				product: "노트북",
				price: 1500000,
				quantity: 1,
				imgSrc: "/images/laptop.jpg",
			},
			{
				date: "2026-01-14",
				product: "마우스",
				price: 30000,
				quantity: 2,
				imgSrc: "/images/mouse.jpg",
			},
			{
				date: "2025-12-01",
				product: "키보드",
				price: 80000,
				quantity: 1,
				imgSrc: "/images/keyboard.jpg",
			},
		];

		vi.mocked(customerApi.getCustomerPurchases).mockResolvedValue(
			mockPurchases,
		);

		renderWithQueryClient(<CustomerDetail {...defaultProps} />);

		await waitFor(() => {
			expect(screen.getByText("노트북")).toBeInTheDocument();
		});

		expect(screen.getByText("노트북")).toBeInTheDocument();
		expect(screen.getByText("마우스")).toBeInTheDocument();
		expect(screen.getByText("키보드")).toBeInTheDocument();

		// 날짜 확인 (같은 날짜는 한 번만 표시)
		const dateHeaders = screen.getAllByText("2026-01-14");
		expect(dateHeaders).toHaveLength(1);
		expect(screen.getByText("2025-12-01")).toBeInTheDocument();

		// 가격 (동일 금액이 제품 가격와 총 금액에서 렌더링될 수 있으므로 개수로 검증)
		expect(screen.getAllByText("1,500,000원").length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText("30,000원").length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText("80,000원").length).toBeGreaterThanOrEqual(1);

		expect(screen.getAllByText("구매 수량: 1개").length).toBeGreaterThanOrEqual(
			1,
		);
		expect(screen.getAllByText("구매 수량: 2개").length).toBeGreaterThanOrEqual(
			1,
		);
	});

	it("총 금액을 제품 가격 * 수량으로 계산해 표시해야 한다", async () => {
		const mockPurchases = [
			{
				date: "2026-01-14",
				product: "마우스",
				price: 30000,
				quantity: 3,
				imgSrc: "/images/mouse.jpg",
			},
		];

		vi.mocked(customerApi.getCustomerPurchases).mockResolvedValue(
			mockPurchases,
		);

		renderWithQueryClient(<CustomerDetail {...defaultProps} />);

		await waitFor(() => {
			expect(screen.getByText("마우스")).toBeInTheDocument();
		});

		// 제품 가격
		expect(screen.getByText("30,000원")).toBeInTheDocument();
		// 총 금액 (30,000 * 3 = 90,000)
		expect(screen.getByText("90,000원")).toBeInTheDocument();
	});

	it("날짜 범위가 변경되면 새로운 구매 내역을 요청해야 한다", async () => {
		const mockPurchases = [
			{
				date: "2026-01-14",
				product: "노트북",
				price: 1500000,
				quantity: 1,
				imgSrc: "/images/laptop.jpg",
			},
		];

		vi.mocked(customerApi.getCustomerPurchases).mockResolvedValue(
			mockPurchases,
		);

		const { rerender } = renderWithQueryClient(
			<CustomerDetail
				customer={mockCustomer}
				from="2025-10-14"
				to="2025-12-31"
			/>,
		);

		await waitFor(() => {
			expect(customerApi.getCustomerPurchases).toHaveBeenCalledWith(1, {
				from: "2025-10-14",
				to: "2025-12-31",
			});
		});

		rerender(
			<QueryClientProvider client={createTestQueryClient()}>
				<CustomerDetail
					customer={mockCustomer}
					from="2026-01-01"
					to="2026-01-14"
				/>
			</QueryClientProvider>,
		);

		await waitFor(() => {
			expect(customerApi.getCustomerPurchases).toHaveBeenCalledWith(1, {
				from: "2026-01-01",
				to: "2026-01-14",
			});
		});
	});
});
