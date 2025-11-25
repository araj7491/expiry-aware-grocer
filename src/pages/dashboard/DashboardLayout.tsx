import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Hidden on mobile */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto bg-muted/10">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
