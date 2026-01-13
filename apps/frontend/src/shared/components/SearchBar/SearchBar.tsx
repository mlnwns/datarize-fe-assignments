import type { ChangeEvent, ComponentProps } from "react";
import searchIcon from "@/assets/search.svg";
import * as S from "./SearchBar.styled";

interface SearchBarProps
	extends Omit<ComponentProps<"input">, "onChange" | "value" | "placeholder"> {
	label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
}

function SearchBar({
	label,
	value,
	onChange,
	placeholder,
	...props
}: SearchBarProps) {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<S.SearchWrapper>
			<S.SearchLabel htmlFor={props.id}>
				<S.VisuallyHidden>{label}</S.VisuallyHidden>
				<S.SearchIcon src={searchIcon} alt="" />
				<S.SearchInput
					type="text"
					value={value}
					placeholder={placeholder}
					onChange={handleInputChange}
					{...props}
				/>
			</S.SearchLabel>
		</S.SearchWrapper>
	);
}

export default SearchBar;
