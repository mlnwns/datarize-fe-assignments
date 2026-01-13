import type { ChangeEvent } from "react";
import searchIcon from "@/assets/search.svg";
import * as S from "./SearchBar.styled";

interface SearchBarProps {
	label: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	maxLength?: number;
	id?: string;
}

function SearchBar({
	label,
	placeholder,
	value,
	onChange,
	maxLength = 30,
	id = "search-input",
}: SearchBarProps) {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<S.SearchWrapper>
			<S.SearchLabel htmlFor={id}>
				<S.VisuallyHidden>{label}</S.VisuallyHidden>
				<S.SearchIcon src={searchIcon} alt="" />
				<S.SearchInput
					id={id}
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={handleInputChange}
					maxLength={maxLength}
				/>
			</S.SearchLabel>
		</S.SearchWrapper>
	);
}

export default SearchBar;
