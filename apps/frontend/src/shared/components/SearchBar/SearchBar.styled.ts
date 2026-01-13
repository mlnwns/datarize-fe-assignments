import styled from "@emotion/styled";

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const SearchLabel = styled.label`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 1rem;

  background-color: #f2f3f7; 
  border: 1px solid #d1d6dd;
  border-radius: 0.5rem;
`;

export const SearchIcon = styled.img`
`;

export const SearchInput = styled.input`
  height: 1.875rem;

  font-size: 0.9rem;
  font-weight: 500;

  background: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: #a4a4a4;
    font-weight: 400;
  }
`;
