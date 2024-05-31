import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { ContactUs } from '@/entities/ContactUs';

import { BaseDialog, BaseImage, IntlLink } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';
import { IBaseDialogProps, Links } from '@/shared/types';

import { STEPS } from './consts';

export const FootSizeModal = ({ isOpen, onClose }: Pick<IBaseDialogProps, 'isOpen' | 'onClose'>) => {
  const [translate] = useClientTranslation('policies', { keyPrefix: 'footSize' });

  return (
    <BaseDialog
      closable
      footer={null}
      isOpen={isOpen}
      onClose={onClose}
      titleIntl={{ label: 'titles.howToMeasureFoot' }}
    >
      <Typography mb={3}>
        {translate('texts.toFindYourFoot')}
      </Typography>

      <Grid container mb={3} justifyContent="center">
        <BaseImage
          width={250}
          height={250}
          src="/images/foot-measure.png"
          alt="¿Cómo medir tu pie para elegir la talla correcta?"
        />
      </Grid>

      <Box pl={3} component="ol">
        {STEPS.map(({ label }) => (
          <Box
            mb={1}
            key={label}
            component="li"
            sx={{
              '&::marker': {
                fontWeight: 'bold',
              },
            }}
          >
            <Typography>
              {translate(label)}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box mb={1}>
        <Typography component="span">
          {translate('texts.toBestSuit')}
        </Typography>

        <IntlLink
          ml={0.5}
          to={Links.RETURNS_REFUNDS}
          intl={{ label: 'here' }}
        />
      </Box>

      <ContactUs onClick={onClose} />
    </BaseDialog>
  );
};
