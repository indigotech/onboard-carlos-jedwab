import styled, { keyframes } from 'styled-components';
import { imgSize } from 'global-styles';

export type SpinnerSizeType = 'small' | 'medium' | 'large';

const imageSize: Record<SpinnerSizeType, string> = {
  small: imgSize.small,
  medium: imgSize.medium,
  large: imgSize.large,
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
  width: ${({ width }) => imageSize[width as SpinnerSizeType] ?? width};
  animation-name: ${spinAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
