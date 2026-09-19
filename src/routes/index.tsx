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
      { path: 'about', element: <Placeholder title="About" /> },
      { path: 'programs', element: <Placeholder title="What We Do" /> },
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
