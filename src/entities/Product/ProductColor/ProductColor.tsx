import React from 'react';
import { Box } from '@mui/material';

export const ProductColor = ({
  color,
  active,
  pointer,
  onClick,
}: {
  color?: string;
  active?: boolean;
  pointer?: boolean;
  onClick?: () => void;
}) => (
  <Box
    sx={{ cursor: (pointer || onClick) ? 'pointer' : 'default' }}
    border={`${active ? 2 : 1}px solid`}
    bgcolor="transparent"
    onClick={onClick}
    component={onClick ? 'button' : undefined}
    borderColor={active ? 'border.main' : '#FFFFFF'}
    borderRadius="100%"
    aria-label="Elija color"
    width={24}
    height={24}
  >
    <Box
      key={color}
      bgcolor={color}
      width="100%"
      height="100%"
      borderRadius="100%"
    />
  </Box>
);
