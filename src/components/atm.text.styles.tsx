import styled from 'styled-components';
import { colors, margins, fontSizes, fontWeights } from 'global-styles';

const handleType = (name: string | undefined) => {
  switch (name) {
    case 'title':
      return StyledTitle;
    case 'normal':
      return StyledNormal;
    case 'label':
      return StyledLabel;
    case 'error':
      return StyledError;
    case 'success':
      return StyledSuccess;
    default:
      return StyledNormal;
  }
};

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

export const StyledText = styled.text`
  ${({ name }) => handleType(name)};
  text-align: center;
`;
