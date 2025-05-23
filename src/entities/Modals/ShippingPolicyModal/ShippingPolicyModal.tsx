import React from 'react';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { ContactUs } from '@/entities/ContactUs';

import { BaseDialog } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';
import { IBaseDialogProps } from '@/shared/types';

import { COLUMNS, ROW_ONE, ROW_TWO } from './consts';

export const ShippingPolicyModal = ({ isOpen, onClose }: Pick<IBaseDialogProps, 'isOpen' | 'onClose'>) => {
  const [translate] = useClientTranslation('policies', { keyPrefix: 'shippingPolicy' });

  return (
    <BaseDialog
      closable
      footer={null}
      isOpen={isOpen}
      onClose={onClose}
      minWidth="50%"
      titleIntl={{ label: 'titles.shippingPolicy' }}
    >
      <Grid container>
        <Grid item xs={12} mb={2}>
          <Typography mb={2}>
            {translate('texts.ourEstimatedDelivery')}
          </Typography>

          <Typography mb={2} fontWeight={700}>
            {translate('texts.totalDeliveryTime')}
          </Typography>

          <Box component="ul" pl={3}>
            <Box component="li">
              <Typography mb={2}>
                {translate('texts.processingTime')}
              </Typography>
            </Box>
            <Box component="li">
              <Typography mb={2}>
                {translate('texts.shippingTime')}
              </Typography>
            </Box>
          </Box>

          <TableContainer sx={{ mb: 3 }}>
            <Table aria-label="Política de Envío" sx={{ minWidth: 650 }}>
              <TableHead sx={{ bgcolor: 'table.head' }}>
                <TableRow>
                  {COLUMNS.map((column) => (
                    <TableCell key={column.intl.label} align="left">
                      <Typography mb={2} color="text.white">
                        {translate(column.intl.label)}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ bgcolor: 'table.body' }}>
                <TableRow>
                  {ROW_ONE.map((column) => (
                    <TableCell key={`${column.intl.label}${column.intl.values?.days}`} align="left">
                      <Typography mb={2} color="text.white">
                        {translate(column.intl.label, column.intl.values)}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {ROW_TWO.map((column) => (
                    <TableCell key={`${column.intl.label}${column.intl.values?.days}`} align="left">
                      <Typography mb={2} color="text.white">
                        {translate(column.intl.label, column.intl.values)}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <ContactUs />
        </Grid>
      </Grid>
    </BaseDialog>
  );
};
