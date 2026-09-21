import { Button } from '../components/common/Button';
import { Search, Filter, Eye } from 'lucide-react';

export const RegistrationsList = () => {
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
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-dark/60 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Phone</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-dark">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">Community Member {i}</td>
                  <td className="px-6 py-4">member{i}@example.com</td>
                  <td className="px-6 py-4 text-dark/70">+1 (555) 123-000{i}</td>
                  <td className="px-6 py-4 text-dark/70">New York, US</td>
                  <td className="px-6 py-4 text-dark/70">Sep {20 - i}, 2026</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gold/10 text-gold">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gold transition-colors p-1" title="View Details">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-dark/70">
          <span>Showing 1 to 7 of 1,248 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-gold text-white rounded-md">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
