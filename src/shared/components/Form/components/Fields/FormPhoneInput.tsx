'use cliend';

import { Controller, useFormContext } from 'react-hook-form';
import { Warning } from '@mui/icons-material';
import { MuiTelInput } from 'mui-tel-input';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IFieldProps } from '@/shared/types';

export const FormPhoneInput = ({
  size,
  name,
  intl,
  required,
  disabled,
  placeholder,
}: Omit<IFieldProps, 'type'>) => {
  const { control } = useFormContext();

  const [translate] = useClientTranslation('form');

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MuiTelInput
          fullWidth
          name={field.name}
          size={size}
          color="primary"
          label={translate(intl.label, intl.values)}
          value={field.value || ''}
          error={!!fieldState.error}
          onBlur={field.onBlur}
          onChange={field.onChange}
          inputRef={field.ref}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          helperText={fieldState.error?.message && translate(fieldState.error.message)}
          defaultCountry="ES"
          onlyCountries={['ES']}
          InputProps={{ endAdornment: fieldState.error && <Warning color="error" /> }}
        />
      )}
    />
  );
};
