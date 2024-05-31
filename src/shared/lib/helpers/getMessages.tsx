import { toast, ToastOptions } from 'react-toastify';
import { Check, Error } from '@mui/icons-material';

export const successMessage = (message: string, options?: ToastOptions) => toast.success(message, {
  position: 'top-center',
  icon: <Check />,
  style: { top: '100px' },
  ...options,
});

export const errorMessage = (message: string, options?: ToastOptions) => toast.error(message, {
  position: 'top-center',
  icon: <Error />,
  style: { top: '100px' },
  ...options,
});
