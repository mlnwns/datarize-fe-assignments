import type { ComponentProps } from "react";
import * as S from "./Button.styled";

export type ButtonVariant = "primary" | "secondary" | "retry";

interface ButtonProps extends ComponentProps<"button"> {
	variant?: ButtonVariant;
}

function Button({ children, variant = "primary", ...props }: ButtonProps) {
	return (
		<S.Button variant={variant} {...props}>
			{children}
		</S.Button>
	);
}

export default Button;
