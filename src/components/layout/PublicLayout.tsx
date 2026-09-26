import { Outlet, useNavigation, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PageLoader } from '../common/PageLoader';

export const PublicLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === 'loading';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader visible={isLoading} />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
