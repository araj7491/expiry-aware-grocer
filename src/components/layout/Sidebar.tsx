import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Database, 
  FileText, 
  Settings, 
  Users,
  Bell,
  FolderOpen
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Database, href: "/" },
    { id: "inventory", label: "Inventory", icon: FolderOpen, href: "/inventory" },
    { id: "expiry", label: "Expiry Tracking", icon: Calendar, href: "/expiry" },
    { id: "alerts", label: "Alerts", icon: Bell, href: "/alerts" },
    { id: "reports", label: "Reports", icon: FileText, href: "/reports" },
    { id: "users", label: "Users", icon: Users, href: "/users" },
    { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-foreground">
            Menu
          </h2>
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => navigate(item.href)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;