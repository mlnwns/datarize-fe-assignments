import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  gap: 0.0625rem;
`;

export const Arrow = styled.span<{ active: boolean }>`
  color: ${({ active }) => (active ? "#515151" : "#adb5bd")};
  font-size: 0.4375rem;
`;
