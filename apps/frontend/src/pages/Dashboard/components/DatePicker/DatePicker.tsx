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
	return (
		<S.Container>
			<S.DatePickerItem>
				<S.Label htmlFor="start-date">시작 일자 지정</S.Label>
				<S.Input
					id="start-date"
					type="date"
					value={startDate}
					max={endDate}
					onChange={(e) => onStartDateChange(e.target.value)}
				/>
			</S.DatePickerItem>
			<S.DatePickerItem>
				<S.Label htmlFor="end-date">종료 일자 지정</S.Label>
				<S.Input
					id="end-date"
					type="date"
					value={endDate}
					min={startDate}
					onChange={(e) => onEndDateChange(e.target.value)}
				/>
			</S.DatePickerItem>
		</S.Container>
	);
}

export default DatePicker;
