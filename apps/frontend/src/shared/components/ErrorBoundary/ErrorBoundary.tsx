import { Component, type ErrorInfo, type ReactNode } from "react";
import Button from "@/shared/components/Button/Button";
import * as S from "./ErrorBoundary.styled";

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
	onReset?: () => void;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	handleReset = () => {
		this.setState({
			hasError: false,
			error: null,
		});

		if (this.props.onReset) {
			this.props.onReset();
		}
	};

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<S.ErrorContainer>
					<S.ErrorTitle>오류가 발생했습니다</S.ErrorTitle>
					<S.ErrorMessage>
						{this.state.error?.message || "데이터를 불러오는데 실패했습니다."}
					</S.ErrorMessage>
					<Button variant="retry" onClick={this.handleReset}>
						다시 시도
					</Button>
				</S.ErrorContainer>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
