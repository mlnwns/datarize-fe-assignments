/**
 * 숫자 가격을 "1,000원" 형태로 포맷
 * @param price - 숫자 가격 (예: 1000)
 * @returns 포맷된 가격 문자열 (예: "1,000원")
 */

export const formatKoreanPrice = (price: number): string => {
	return `${price.toLocaleString("ko-KR")}원`;
};

/**
 * API로 전달받은 range 문자열을 화면 표시용으로 포맷팅
 * @param range - API range 문자열 (예: "0 - 20000", "20001 - 30000")
 * @returns 화면 표시용 문자열 (예: "2만원 이하", "2만원 - 3만원")
 */

export const formatPriceRange = (range: string) => {
	const [minRange, maxRange] = range.split(" - ");
	const min = Number(minRange);
	const max = maxRange === "Infinity" ? Infinity : Number(maxRange);

	const formatToTenThousandWon = (value: number) => {
		return `${Math.floor(value / 10000)}만원`;
	};

	if (min === 0) {
		return `${formatToTenThousandWon(max)} 이하`;
	}

	if (max === Infinity) {
		return `${formatToTenThousandWon(min - 1)} 이상`;
	}

	return `${formatToTenThousandWon(min - 1)} - ${formatToTenThousandWon(max)}`;
};
