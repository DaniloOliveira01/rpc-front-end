import '../core/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app'
import { AuthProvider } from '../core/contexts/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <ToastContainer autoClose={10000} />
    </>
  );
}

export default MyApp;
