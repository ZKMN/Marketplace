import React from 'react';
import { Menu } from '@mui/icons-material';
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  MenuList,
} from '@mui/material';
import { useBoolean } from 'ahooks';

import { BaseDrawer, BaseImage, IntlLink } from '@/shared/components';
import { usePathnameWithoutLng } from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';
import { LanguageSelector } from '..';

export const DrawerMenu = () => {
  const pathname = usePathnameWithoutLng();

  const [isOpen, { setTrue, setFalse }] = useBoolean();

  return (
    <Grid
      item
      sx={({ breakpoints }) => ({
        [breakpoints.up('md')]: {
          display: 'none',
        },
      })}
    >
      <IconButton
        onClick={setTrue}
        aria-label="Menu"
      >
        <Menu />
      </IconButton>

      <BaseDrawer
        open={isOpen}
        onClose={setFalse}
        titleExtraNode={(
          <BaseImage
            priority
            src="/images/logo-short.svg"
            alt="Weestep Kids"
            width={150}
            height={40}
            objectFit="contain"
          />
        )}
      >
        <LanguageSelector />

        <MenuList>
          {getMenuItems.map(({ label, link, path }, index) => (
            <MenuItem
              divider
              key={label}
            >
              <IntlLink
                width="100%"
                to={`${link}${path || ''}`}
                intl={{ label }}
                color="text.black"
                onClick={setFalse}
              />

              {((label !== 'home' && pathname.includes(link)) || (!pathname && index === 0)) && (
                <Box
                  ml={3}
                  width={7}
                  height={7}
                  bgcolor="background.primary"
                  component="span"
                  borderRadius={100}
                />
              )}
            </MenuItem>
          ))}

        </MenuList>
      </BaseDrawer>
    </Grid>
  );
};
