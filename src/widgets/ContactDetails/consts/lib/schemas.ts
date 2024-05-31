import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  subject: Yup.string()
    .required('errors.subjectRequired'),
  email: Yup.string()
    .email('errors.emailInvalid')
    .required('errors.emailRequired'),
  message: Yup.string()
    .required('errors.messageRequired'),
});
