import { useEffect, useState } from "react";
import * as S from "./DeferredSpinner.styled";

interface DeferredSpinnerProps {
	delay?: number;
}

function DeferredSpinner({ delay = 300 }: DeferredSpinnerProps) {
	const [showSpinner, setShowSpinner] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSpinner(true);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [delay]);

	if (!showSpinner) {
		return null;
	}

	return (
		<S.SpinnerContainer>
			<S.Spinner />
		</S.SpinnerContainer>
	);
}

export default DeferredSpinner;
