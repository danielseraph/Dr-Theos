import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../components/layout/PublicLayout';
import { AdminLayout } from '../components/layout/AdminLayout';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Contact } from '../pages/Contact';
import { AdminDashboard } from '../pages/AdminDashboard';
import { RegistrationsList } from '../pages/RegistrationsList';
import { AdminPosts } from '../pages/AdminPosts';
import { PostCreationForm } from '../pages/PostCreationForm';

import { About } from '../pages/About';
import { Founder } from '../pages/Founder';
import { Leadership } from '../pages/Leadership';
import { Mission } from '../pages/Mission';
import { ProgramsIndex } from '../pages/programs/ProgramsIndex';
import { ProgramDetail } from '../pages/programs/ProgramDetail';
import { Impact } from '../pages/Impact';
import { SuccessStories } from '../pages/SuccessStories';
import { Transparency } from '../pages/Transparency';
import { Donate } from '../pages/Donate';
import { ApplicationPortal } from '../pages/ApplicationPortal';

// Placeholder components for routing
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex-grow flex items-center justify-center pt-24 pb-12 text-2xl font-bold text-navy">
    {title} Page Under Construction
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'about/founder', element: <Founder /> },
      { path: 'about/leadership', element: <Leadership /> },
      { path: 'about/mission', element: <Mission /> },
      { path: 'programs', element: <ProgramsIndex /> },
      { path: 'programs/:id', element: <ProgramDetail /> },
      { path: 'impact', element: <Impact /> },
      { path: 'impact/success-stories', element: <SuccessStories /> },
      { path: 'impact/financial-transparency', element: <Transparency /> },
      { path: 'apply', element: <ApplicationPortal /> },
      { path: 'donate', element: <Donate /> },
      { path: 'get-involved/donate', element: <Donate /> },
      { path: 'community', element: <Placeholder title="Community" /> },
      { path: 'posts', element: <Placeholder title="Posts" /> },
      { path: 'contact', element: <Contact /> },
      { path: 'register', element: <Register /> },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'registrations', element: <RegistrationsList /> },
      { path: 'posts', element: <AdminPosts /> },
      { path: 'posts/new', element: <PostCreationForm /> },
      { path: 'media', element: <div className="p-8 text-xl font-bold text-navy">Media Library coming soon...</div> },
      { path: 'settings', element: <div className="p-8 text-xl font-bold text-navy">Settings coming soon...</div> },
    ]
  }
]);
