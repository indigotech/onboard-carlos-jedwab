import styled from 'styled-components';
import { colors, margins, boxHeights, fontSizes, fontWeights } from 'global-styles';

export const StyledInput = styled.input`
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.regular};
  color: ${colors.black};
  width: 100%;
  border: 1px solid ${colors.black};
  height: ${boxHeights.text};
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${margins.small};
  margin-bottom: ${margins.small};
`;
