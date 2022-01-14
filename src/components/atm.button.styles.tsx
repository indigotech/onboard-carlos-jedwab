import styled from 'styled-components';

export const StyledButton = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  height: 44px;
  background-color: rgb(97, 62, 181);
`;

export const StyledSpinnerWrapper = styled.div`
  grid-column: 1;
`;

export const StyledLabelWrapper = styled.div`
  grid-column: 2;
  font-size: 16px;
  font-weight: regular;
  color: white;
`;
