'use client';

import React from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Collapse, Typography } from '@mui/material';
import { useBoolean } from 'ahooks';

export const BaseCollapse = ({
  open,
  title,
  color,
  children,
}: React.PropsWithChildren<{ open?: boolean; title: React.ReactNode; color?: 'primary'; }>) => {
  const [isOpen, { toggle }] = useBoolean(open);

  return (
    <>
      <Box
        sx={{ cursor: 'pointer' }}
        onClick={toggle}
        width="100%"
        border="none"
        display="flex"
        component="button"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="background.paper"
        borderBottom="1px solid"
        borderColor="border.main"
        padding="10px 0"
      >
        <Typography
          color={color}
          fontSize="1.1rem"
          textAlign="left"
        >
          {title}
        </Typography>

        <ArrowForwardIos
          color={color || 'secondary'}
          fontSize="small"
          sx={({ transitions }) => ({
            transform: isOpen ? 'rotate(90deg)' : undefined,
            transition: transitions.create(['transform'], {
              duration: transitions.duration.short,
            }),
          })}
        />
      </Box>

      <Collapse in={isOpen}>
        <Box pl={1} pt={2} pb={2}>
          {children}
        </Box>
      </Collapse>
    </>
  );
};
