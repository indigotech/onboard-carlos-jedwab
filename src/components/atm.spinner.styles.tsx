import styled, { keyframes } from 'styled-components';

const handleWidth = (width: string | number | undefined) => {
  switch (width) {
    case 'small':
      return '25px';
    case 'medium':
      return '40px';
    case 'large':
      return '60px';
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
