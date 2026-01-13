import { useState } from "react";
import type { ISODateString } from "@/shared/types/date";
import * as S from "./DatePicker.styled";

interface DatePickerProps {
	startDate: ISODateString;
	endDate: ISODateString;
	onStartDateChange: (date: ISODateString) => void;
	onEndDateChange: (date: ISODateString) => void;
}

function DatePicker({
	startDate,
	endDate,
	onStartDateChange,
	onEndDateChange,
}: DatePickerProps) {
	const [inputStartDate, setInputStartDate] = useState(startDate);
	const [inputEndDate, setInputEndDate] = useState(endDate);

	const handleBlur = () => {
		if (inputStartDate > inputEndDate) {
			onStartDateChange(inputEndDate);
			onEndDateChange(inputStartDate);
			setInputStartDate(inputEndDate);
			setInputEndDate(inputStartDate);
		} else {
			onStartDateChange(inputStartDate);
			onEndDateChange(inputEndDate);
		}
	};

	return (
		<S.Container>
			<S.DatePickerItem>
				<S.Label htmlFor="start-date">시작 일자 지정</S.Label>
				<S.Input
					id="start-date"
					type="date"
					value={inputStartDate}
					max={inputEndDate}
					onChange={(e) => setInputStartDate(e.target.value)}
					onBlur={handleBlur}
				/>
			</S.DatePickerItem>
			<S.DatePickerItem>
				<S.Label htmlFor="end-date">종료 일자 지정</S.Label>
				<S.Input
					id="end-date"
					type="date"
					value={inputEndDate}
					min={inputStartDate}
					onChange={(e) => setInputEndDate(e.target.value)}
					onBlur={handleBlur}
				/>
			</S.DatePickerItem>
		</S.Container>
	);
}

export default DatePicker;
