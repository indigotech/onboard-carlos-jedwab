import styled from 'styled-components';
import { margins } from 'global-styles';

export const StyledLabelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${margins.medium};
  margin-bottom: ${margins.medium};
`;
