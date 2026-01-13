import * as S from "./DashboardSection.styled";

interface DashboardSectionProps {
	title?: string;
	description?: string;
	children: React.ReactNode;
}

function DashboardSection({
	title,
	description,
	children,
}: DashboardSectionProps) {
	return (
		<S.Section>
			<S.SectionHeader>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
			</S.SectionHeader>
			{children}
		</S.Section>
	);
}

export default DashboardSection;
