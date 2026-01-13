import type { ComponentProps } from "react";
import * as S from "./Button.styled";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ComponentProps<"button"> {
	variant?: ButtonVariant;
}

export const Button = ({
	children,
	variant = "primary",
	...props
}: ButtonProps) => {
	return (
		<S.Button variant={variant} {...props}>
			{children}
		</S.Button>
	);
};
