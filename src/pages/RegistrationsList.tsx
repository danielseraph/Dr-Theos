import { useState, useEffect } from 'react';
import { Button } from '../components/common/Button';
import { Search, Filter, Eye } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  country: string;
  areaOfInterest: string;
  isActive: boolean;
  createdAt: string;
}

export const RegistrationsList = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/registrations`); // Or /api/v1/admin/registrations if routing changed
        if (!response.ok) {
          throw new Error('Failed to fetch registrations');
        }
        const data = await response.json();
        // Handle different backend response structures gracefully
        const fetchedRegistrations = data.data ? data.data : (Array.isArray(data) ? data : []);
        setRegistrations(fetchedRegistrations);
      } catch (err) {
        console.error(err);
        setError('Could not load registrations.');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy mb-1">Registrations</h1>
          <p className="text-dark/70 text-sm">Manage community members and view their details.</p>
        </div>
        <Button variant="primary" size="sm">Export Data</Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-white"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="!text-dark !border-gray-200 hover:!bg-gray-100">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {error && <div className="p-4 text-red-500 bg-red-50">{error}</div>}
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-dark/60 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Phone</th>
                <th className="px-6 py-4 font-semibold">Area of Interest</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Date Joined</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-dark">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-dark/50">
                    Loading registrations...
                  </td>
                </tr>
              ) : registrations.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-dark/50">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                registrations.map((registration) => (
                  <tr key={registration.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-navy">
                      {registration.firstName} {registration.lastName}
                    </td>
                    <td className="px-6 py-4">{registration.email}</td>
                    
                    {/* Fixed mapping based on user instruction */}
                    <td className="px-6 py-4 text-dark/70">{registration.phoneNumber}</td>
                    <td className="px-6 py-4 text-dark/70">{registration.areaOfInterest || 'N/A'}</td>
                    
                    <td className="px-6 py-4 text-dark/70">
                      {[registration.state, registration.country].filter(Boolean).join(', ') || 'N/A'}
                    </td>
                    
                    {/* Fixed mapping for Date Joined */}
                    <td className="px-6 py-4 text-dark/70">
                      {new Date(registration.createdAt).toLocaleDateString()}
                    </td>
                    
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gold/10 text-gold">
                        {registration.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gold transition-colors p-1" title="View Details">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-dark/70">
          <span>Showing {registrations.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-gold text-white rounded-md">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
