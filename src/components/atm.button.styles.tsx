import styled from 'styled-components';
import { colors, margins, boxHeights, fontSizes, fontWeights } from 'global-styles';

export type ButtonType = 'button' | 'submit' | 'reset';

export const StyledButton = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin-top: ${margins.medium};
  margin-bottom: ${margins.medium};
  margin-left: 0px;
  margin-right: 0px;
  height: ${boxHeights.button};
  background-color: ${colors.callToAction};
`;

export const StyledSpinnerWrapper = styled.div`
  grid-column: 1;
`;

export const StyledLabelWrapper = styled.div`
  grid-column: 2;
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.regular};
  color: white;
`;
