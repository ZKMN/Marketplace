import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

import { I18N_COOKIE_NAME, LANGUAGES } from '@/shared/consts';
import { usePathnameWithoutLng, useTypedParams } from '@/shared/lib/hooks';
import { Links, TLanguages } from '@/shared/types';

import 'dayjs/locale/es';

export const LanguageSelector = () => {
  const { lng } = useTypedParams();
  const { push } = useRouter();
  const pathname = usePathnameWithoutLng();
  const [cookies, setCookie] = useCookies([I18N_COOKIE_NAME]);

  useEffect(() => {
    dayjs.locale(lng);

    if (cookies.i18next !== lng) {
      setCookie(I18N_COOKIE_NAME, lng, { path: '/' });
    }
  }, [lng, cookies.i18next]);

  const handleChange = (locale: TLanguages) => () => {
    // catalogues has a lot of translated filters we should remove it when change lang
    if (pathname.includes(Links.CATALOGUE)) {
      return push(`/${locale}/${window.location.pathname.replace(`/${lng}`, '')}`);
    }

    return push(`/${locale}/${window.location.pathname.replace(`/${lng}`, '')}${window.location.search}`);
  };

  return (
    <Stack
      spacing={1}
      divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      justifyContent="flex-end"
    >
      {LANGUAGES.map((lang) => (
        <Box
          key={lang}
          onClick={handleChange(lang)}
          aria-label={`${lang} idioma`}
          component="button"
          border="none"
          bgcolor="background.paper"
          sx={{ cursor: 'pointer' }}
        >
          <Typography
            color="text.black"
            fontSize="1.2rem"
            fontWeight={lng === lang ? 700 : 400}
          >
            {lang.toUpperCase()}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};
