import type { Purchase } from "@/apis/purchase/type";

export const convertPurchasesToCSV = (purchases: Purchase[]) => {
	const headers = ["날짜", "고객명", "상품명", "가격", "수량"];
	const rows = purchases.map((purchase) => [
		purchase.date,
		purchase.customerName,
		purchase.productName,
		purchase.price.toString(),
		purchase.quantity.toString(),
	]);

	const csvContent = [headers, ...rows]
		.map((row) => row.map((cell) => `"${cell}"`).join(","))
		.join("\n");

	return csvContent;
};

export const downloadCSV = (csvContent: string, filename: string) => {
	const BOM = "\uFEFF";
	const blob = new Blob([BOM + csvContent], {
		type: "text/csv;charset=utf-8;",
	});
	const url = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();

	URL.revokeObjectURL(url);
};
