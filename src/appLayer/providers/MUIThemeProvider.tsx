'use client';

import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { enUS, esES } from '@mui/material/locale';

import { theme } from '@/shared/assets';
import { useTypedParams } from '@/shared/lib/hooks';

export const MUIThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { lng } = useTypedParams();

  const themeWithLocale = useMemo(
    () => createTheme(theme, lng === 'en' ? enUS : esES),
    [lng, theme],
  );

  return (
    <ThemeProvider theme={themeWithLocale}>
      {children}
    </ThemeProvider>
  );
};
