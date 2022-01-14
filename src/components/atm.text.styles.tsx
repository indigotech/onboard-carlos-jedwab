import styled from 'styled-components';

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
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledNormal = `
  font-size: 16px;
  font-weight: bold;
  color: gray;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledLabel = `
  font-size: 12px;
  font-weight: regular;
  color: gray;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledError = `
  font-size: 12px;
  font-weight: bold;
  color: red;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
`;

const StyledSuccess = `
  font-size: 12px;
  font-weight: bold;
  color: green;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
`;

export const StyledText = styled.text`
  ${({ name }) => handleType(name)};
  text-align: center;
`;
