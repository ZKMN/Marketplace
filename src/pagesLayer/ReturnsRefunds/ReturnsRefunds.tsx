'use client';

import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { ContactUs } from '@/entities/ContactUs';

import { BaseContainer } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';

export const ReturnsRefunds = () => {
  const [translate] = useClientTranslation('policies', { keyPrefix: 'returnRefund' });

  return (
    <BaseContainer mt={3} mb={3}>
      <Typography
        color="primary"
        variant="h1"
        component="h1"
        fontWeight={700}
        textAlign="center"
        sx={({ breakpoints }) => ({
          mb: 3,
          fontSize: '2.5rem',
          [breakpoints.down('lg')]: {
            fontSize: '1.5rem',
          },
        })}
      >
        {translate('titles.returnsRefunds')}
      </Typography>

      <Typography mb={3}>
        {translate('texts.weOfferDays')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.returnProcess')}
      </Typography>

      <Box component="ol" pl={3} mb={3}>
        {[1, 2, 3, 4].map((pos) => (
          <Box
            key={pos}
            component="li"
            sx={{
              '&::marker': {
                fontWeight: 'bold',
              },
            }}
          >
            <Typography mb={1}>
              {translate(`texts.returnProcessStep${pos}`)}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.returnsPolicy')}
      </Typography>

      <Box component="ol" pl={3} mb={3}>
        {[1, 2, 3, 4, 5, 6].map((pos) => (
          <Box
            key={pos}
            component="li"
            sx={{
              '&::marker': {
                fontWeight: 'bold',
              },
            }}
          >
            <Typography mb={1}>
              {translate(`texts.returnsPolicyStep${pos}`)}
            </Typography>
          </Box>
        ))}
      </Box>

      <TableContainer sx={{ mb: 3 }}>
        <Table aria-label="Política de Envío" sx={{ maxWidth: 750 }}>
          <TableHead sx={{ bgcolor: 'table.head' }}>
            <TableRow>
              <TableCell align="left">
                <Typography color="text.white">
                  {translate('titles.reasonsForReturns')}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color="text.white">
                  {translate('titles.solution')}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ bgcolor: 'table.body' }}>
            {[1, 2, 3, 4, 5].map((pos) => (
              <TableRow key={pos}>
                <TableCell align="left">
                  <Typography color="text.white">
                    {translate(`texts.reason${pos}`)}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography color="text.white">
                    {translate(`texts.solution${pos}`)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="left">
                <Typography color="text.white">
                  {translate('texts.reason6')}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <ContactUs color="text.white" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.returnAddress')}
      </Typography>

      <Typography mb={1}>
        {translate('texts.ifYouWishReturn')}
      </Typography>

      <Typography mb={3}>
        {translate('texts.returnNote')}
      </Typography>

      <ContactUs />
    </BaseContainer>
  );
};
