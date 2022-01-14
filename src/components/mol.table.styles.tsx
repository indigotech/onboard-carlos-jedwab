import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(162, 162, 162);
  margin: 5px;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(198, 198, 198);
  margin: 5px;
  width: 100%;
  ${(props) => props.onClick && `cursor: pointer;`}
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 8px;
  width: 100%;
`;
