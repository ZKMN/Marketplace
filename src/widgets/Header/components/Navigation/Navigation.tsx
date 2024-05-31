import React from 'react';
import { Box } from '@mui/material';

import { theme } from '@/shared/assets';
import { IntlLink } from '@/shared/components';
import { usePathnameWithoutLng } from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const pathname = usePathnameWithoutLng();

  return (
    <Box component="menu">
      <Box component="ul" className={styles.menuUl}>
        {getMenuItems.map(({ label, link, path }, index) => (
          <Box
            key={label}
            component="li"
            className={styles.menuItem}
          >
            <IntlLink
              to={`${link}${path || ''}`}
              intl={{ label }}
              color="text.black"
              fontFamily={theme.typography.fontFamily}
              textTransform="uppercase"
            />

            {((label !== 'home' && pathname.includes(link)) || (!pathname && index === 0)) && (
              <Box
                bgcolor="background.primary"
                className={styles.activeMenuItem}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
