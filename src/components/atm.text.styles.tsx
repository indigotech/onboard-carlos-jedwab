import styled from 'styled-components';
import { colors, margins, fontSizes, fontWeights } from 'global-styles';

const StyledTitle = `
  font-size: ${fontSizes.large};
  font-weight: ${fontWeights.bold};
  color: ${colors.black};
  margin-top: ${margins.large};
  margin-bottom: ${margins.large};
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledNormal = `
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
  color: ${colors.gray};
  margin-top: ${margins.medium};
  margin-bottom: ${margins.medium};
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledLabel = `
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.regular};
  color: ${colors.gray};
  margin-top: ${margins.small};
  margin-bottom: ${margins.small};
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledError = `
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${colors.error};
  margin-top: ${margins.small};
  margin-bottom: ${margins.small};
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledSuccess = `
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  color: ${colors.success};
  margin-top: ${margins.small};
  margin-bottom: ${margins.small};
  margin-left: 0px;
  margin-right: 0px;
`;

export type TextNameType = 'title' | 'normal' | 'label' | 'error' | 'success';

const type: Record<TextNameType, string> = {
  title: StyledTitle,
  normal: StyledNormal,
  label: StyledLabel,
  error: StyledError,
  success: StyledSuccess,
};

export const StyledText = styled.text`
  ${({ name }) => type[name as TextNameType] ?? name};
  text-align: center;
`;
