import { useEffect, useState } from "react";

interface useDebounceProps<T> {
	value: T;
	delay?: number;
}

const useDebounce = <T>({ value, delay = 300 }: useDebounceProps<T>) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
