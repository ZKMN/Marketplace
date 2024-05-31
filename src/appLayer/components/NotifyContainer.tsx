import React from 'react';
import { ToastContainer } from 'react-toastify';

export const NotifyContainer = () => (
  <ToastContainer
    closeOnClick
    hideProgressBar
    draggable={false}
    closeButton={false}
  />
);
