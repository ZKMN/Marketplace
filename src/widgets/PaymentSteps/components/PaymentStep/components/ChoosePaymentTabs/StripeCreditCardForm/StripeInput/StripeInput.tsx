import React, { useImperativeHandle, useRef } from 'react';
import { InputBaseComponentProps } from '@mui/material';

export const StripeInput = React.forwardRef((props: InputBaseComponentProps, ref) => {
  const { component: Component, ...other } = props;

  const elementRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focus: () => elementRef.current?.focus,
  }));

  return (
    <Component
      onReady={(element: HTMLInputElement) => {
        elementRef.current = element;
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
});
