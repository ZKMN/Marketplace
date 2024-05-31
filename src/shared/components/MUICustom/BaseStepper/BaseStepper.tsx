'use client';

import React from 'react';
import { CheckOutlined } from '@mui/icons-material';
import {
  Grid,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
} from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: 'rgb(255,124,42)',
      backgroundImage: 'linear-gradient(90deg, rgba(255,124,42,1) 0%, rgba(17,94,103,1) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.background.primary,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{ completed?: boolean; active?: boolean;}>(({
  theme,
  active,
  completed,
}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: theme.palette.text.white,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(active && { backgroundColor: theme.palette.background.secondary }),
  ...(completed && { backgroundColor: theme.palette.background.primary }),
}));

export const BaseStepper = ({
  steps,
  stepNodes,
  activeStep,
}: {
  steps: { intl: IIntlProps['intl']; icon: React.ReactElement; }[];
  stepNodes: { [index: string]: React.ReactElement; };
  activeStep: number;
}) => {
  const [translate] = useClientTranslation('typography');

  return (
    <Grid container>
      <Grid item xs={12}>
        <Stepper
          alternativeLabel
          sx={{ mb: 5 }}
          connector={<ColorlibConnector />}
          activeStep={activeStep}
        >
          {steps.map(({ intl, icon }) => (
            <Step key={intl.label}>
              <StepLabel
                sx={{ fontSize: 20 }}
                StepIconComponent={({ completed, active, className }) => (
                  <ColorlibStepIconRoot
                    active={active}
                    completed={completed}
                    className={className}
                  >
                    {completed ? <CheckOutlined /> : icon}
                  </ColorlibStepIconRoot>
                )}
              >
                {translate(intl.label, intl.values)}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {stepNodes[activeStep]}
      </Grid>
    </Grid>
  );
};
