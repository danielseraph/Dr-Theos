import { Users, UserPlus, FileText, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-gold/30 transition-colors">
    <div>
      <p className="text-dark/60 text-sm font-semibold mb-1 uppercase tracking-wider">{title}</p>
      <h4 className="text-3xl font-bold text-navy">{value}</h4>
      {trend && (
        <p className="text-gold text-sm font-medium mt-2 flex items-center">
          <TrendingUp className="w-4 h-4 mr-1" />
          {trend}
        </p>
      )}
    </div>
    <div className="w-14 h-14 bg-offwhite rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
      <Icon className="w-7 h-7 text-gold" />
    </div>
  </div>
);

export const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy mb-2">Overview</h1>
        <p className="text-dark/70">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Registered" value="1,248" icon={Users} trend="+12% this month" />
        <StatCard title="Registered Today" value="24" icon={UserPlus} trend="+4 from yesterday" />
        <StatCard title="Registered This Week" value="156" icon={UserPlus} />
        <StatCard title="Total Posts" value="48" icon={FileText} />
      </div>

      {/* Recent Activity Table Placeholder */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-navy text-lg">Recent Registrations</h3>
          <button className="text-gold font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-dark/60 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-dark">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">Jane Doe {i}</td>
                  <td className="px-6 py-4">jane.doe{i}@example.com</td>
                  <td className="px-6 py-4 text-dark/70">Sep {19 - i}, 2026</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold/10 text-gold border border-gold/20">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
