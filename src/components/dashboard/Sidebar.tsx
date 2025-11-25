import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Timer,
  Bell,
  FileText,
  Users,
  Settings,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Package, label: 'Inventory', path: '/dashboard/inventory' },
  { icon: Timer, label: 'Expiry Tracking', path: '/dashboard/expiry-tracking' },
  { icon: Bell, label: 'Alerts', path: '/dashboard/alerts' },
  { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
  { icon: Users, label: 'Users', path: '/dashboard/users' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn('flex h-full flex-col border-r bg-background', className)}>
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-freshguard" />
          <span className="text-xl font-bold text-fg-text-dark">FreshGuard</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">
            AR
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Ankit Raj</p>
            <p className="text-xs text-muted-foreground truncate">Team Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
