'use client';

import { ToastContainer as ReactToastContainer } from 'react-toastify';

export const ToastContainer = () => {
  return <ReactToastContainer position="top-right" autoClose={5000} />;
};
