import styled from 'styled-components';
import { colors, margins } from 'global-styles';

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.primary};
  margin: ${margins.small};
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.secondary};
  margin: ${margins.small};
  width: 100%;
  ${(props) => props.onClick && `cursor: pointer;`}
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: ${margins.small};
  width: 100%;
`;
