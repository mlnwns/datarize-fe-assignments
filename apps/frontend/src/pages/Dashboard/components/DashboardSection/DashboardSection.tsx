import * as S from "./DashboardSection.styled";

interface DashboardSectionProps {
	title?: string;
	description?: string;
	action?: React.ReactNode;
	children: React.ReactNode;
}

function DashboardSection({
	title,
	description,
	action,
	children,
}: DashboardSectionProps) {
	return (
		<S.Section>
			<S.SectionHeader>
				<S.SectionInfo>
					<S.Title>{title}</S.Title>
					<S.Description>{description}</S.Description>
				</S.SectionInfo>
				<S.SectionAction>{action}</S.SectionAction>
			</S.SectionHeader>
			{children}
		</S.Section>
	);
}

export default DashboardSection;
