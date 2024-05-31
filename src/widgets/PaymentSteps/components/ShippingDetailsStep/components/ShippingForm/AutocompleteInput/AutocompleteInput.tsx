import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Cancel, SearchOutlined } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { Autocomplete, Libraries, useLoadScript } from '@react-google-maps/api';

import { config } from '@/shared/lib/config';
import { useClientTranslation, useTypedParams } from '@/shared/lib/hooks';

const libraries = ['places'] as Libraries;

export const AutocompleteInput = () => {
  const { lng } = useTypedParams();
  const { setValue, resetField } = useFormContext();

  const [inputValue, setInputValue] = useState('');
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete>();

  const { isLoaded } = useLoadScript({
    id: 'google-script',
    language: lng,
    libraries,
    googleMapsApiKey: String(config.keys.gAPI),
  });

  const [translate] = useClientTranslation('form');

  if (!isLoaded) {
    return null;
  }

  return (
    <Autocomplete
      options={{ strictBounds: true }}
      restrictions={{ country: ['es'] }}
      onLoad={setAutocomplete}
      onPlaceChanged={() => {
        if (autocomplete) {
          const addressObject = autocomplete.getPlace();
          const address = addressObject?.address_components;

          const city = address?.find((item) => item.types.includes('locality'))?.long_name;
          const street = address?.find((item) => item.types.includes('route'))?.long_name;
          const streetNumber = address?.find((item) => item.types.includes('street_number'))?.long_name;
          const postalCode = address?.find((item) => item.types.includes('postal_code'))?.long_name;

          setValue('city', city, { shouldDirty: true, shouldValidate: true });
          setValue('street', street, { shouldDirty: true, shouldValidate: true });
          setValue('streetNumber', streetNumber, { shouldDirty: true, shouldValidate: true });
          setValue('postalCode', postalCode, { shouldDirty: true, shouldValidate: true });
        }
      }}
    >
      <TextField
        fullWidth
        sx={{ mt: 2 }}
        disabled={!isLoaded}
        value={inputValue}
        name="autocomplete"
        variant="outlined"
        label={translate('labels.searchAddress')}
        onChange={({ target }) => setInputValue(target.value)}
        helperText={translate('texts.useSearchAddress')}
        InputProps={{
          startAdornment: <SearchOutlined color="disabled" sx={{ mr: 1 }} />,
          endAdornment: inputValue && (
            <IconButton
              onClick={() => {
                setInputValue('');
                resetField('city');
                resetField('street');
                resetField('streetNumber');
                resetField('postalCode');
                autocomplete?.set('place', null);
              }}
            >
              <Cancel color="disabled" />
            </IconButton>
          ),
        }}
      />
    </Autocomplete>
  );
};
