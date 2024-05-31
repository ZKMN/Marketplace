import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { MUIThemeProvider } from '@/appLayer/providers';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { NotifyContainer } from './components';

import '../shared/styles/globals.scss';

export const App = ({ children }: React.PropsWithChildren) => (
  <AppRouterCacheProvider>
    <MUIThemeProvider>
      <NotifyContainer />

      <Header />

      <main>{children}</main>

      <Footer />
    </MUIThemeProvider>
  </AppRouterCacheProvider>
);
