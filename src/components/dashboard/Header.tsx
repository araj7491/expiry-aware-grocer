import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MobileSidebar } from './Sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <div>
            <h1 className="text-lg font-semibold md:text-xl">FreshGuard Dashboard</h1>
            <p className="text-sm text-muted-foreground hidden md:block">
              Real-time cold chain monitoring & expiry tracking
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="hidden md:inline-flex">
            Demo Mode
          </Badge>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
          </Button>
        </div>
      </div>
    </header>
  );
}
