import styled from "@emotion/styled";

export const Layout = styled.div`
	min-height: 100vh;
  background: #f0f4f9;
`;

export const Content = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1.5rem;
`;

export const Header = styled.header`
  position: sticky;
  z-index: 100;
  padding: 1.8rem 0.75rem 1.8rem 1.3125rem;

  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);

  border-bottom: 1.5px solid rgba(108, 111, 118, 0.06);
`;

export const HeaderLogo = styled.img`
  width: 9.375rem;
  margin-right: 1.2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 0.9375rem;
  color: #181818;
  font-weight: 400;
`;
