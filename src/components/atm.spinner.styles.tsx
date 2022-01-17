import styled, { keyframes } from 'styled-components';
import { imgSize } from 'global-styles';

const handleWidth = (width: string | number | undefined) => {
  switch (width) {
    case 'small':
      return imgSize.small;
    case 'medium':
      return imgSize.medium;
    case 'large':
      return imgSize.large;
    default:
      return width;
  }
};

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledAnimation = styled.img`
  width: ${({ width }) => handleWidth(width)};
  animation-name: ${spinAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
