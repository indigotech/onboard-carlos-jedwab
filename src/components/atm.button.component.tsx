import React from 'react';

import { ButtonType, StyledButton, StyledSpinnerWrapper, StyledLabelWrapper } from './atm.button.styles';
import { Spinner } from './atm.spinner.component';

interface ButtonProps {
  label: string;
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton type={props.type} disabled={props.isLoading} onClick={props.onClick}>
      {props.isLoading && (
        <StyledSpinnerWrapper>
          <Spinner size='small' />
        </StyledSpinnerWrapper>
      )}
      <StyledLabelWrapper>{props.label}</StyledLabelWrapper>
    </StyledButton>
  );
};
