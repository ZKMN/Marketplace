import { matchIsValidTel } from 'mui-tel-input';
import * as Yup from 'yup';

import { validateSpainPostalCode } from './validateSpainPostalCode';

const pickupFormValidation = {
  firstName: Yup.string()
    .required('errors.firstNameRequired')
    .max(50, 'errors.firstNameMax'),
  lastName: Yup.string()
    .required('errors.lastNameRequired')
    .max(50, 'errors.lastNameMax'),
  email: Yup.string()
    .trim()
    .email('errors.emailInvalid')
    .required('errors.emailRequired'),
  phoneNumber: Yup.string()
    .trim()
    .required('errors.phoneNumberRequired')
    .test(
      'phoneNumber',
      'errors.phoneNumberInvalid',
      (phone) => {
        if (phone.startsWith('+34') && (matchIsValidTel(phone, { onlyCountries: ['ES'] }))) {
          return true;
        }

        return false;
      },
    ),
};

export const PICKUP_FORM_SCHEMA = Yup.object().shape(pickupFormValidation);

export const DELIVERY_FORM_SCHEMA = Yup.object().shape({
  ...pickupFormValidation,
  postalCode: Yup.string()
    .trim()
    .required('errors.postalCodeRequired')
    .test(
      'postalCode',
      'errors.postalCodeInvalid',
      (postalCode) => {
        if (validateSpainPostalCode(postalCode)) {
          return true;
        }

        return false;
      },
    ),
  city: Yup.string()
    .required('errors.cityRequired'),
  street: Yup.string()
    .required('errors.streetRequired'),
  streetNumber: Yup.string()
    .required('errors.streetNumberRequired'),
  additional: Yup.string(),
});
