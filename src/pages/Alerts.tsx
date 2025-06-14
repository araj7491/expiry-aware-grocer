import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, Info, Calendar } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: "Critical",
      title: "Products Expired Today",
      message: "3 products have expired and need immediate removal",
      time: "2 minutes ago",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      id: 2,
      type: "Warning", 
      title: "Low Stock Alert",
      message: "15 products are running low on stock",
      time: "15 minutes ago",
      icon: Calendar,
      color: "text-warning"
    },
    {
      id: 3,
      type: "Info",
      title: "Weekly Report Available",
      message: "Your weekly inventory report is ready for review",
      time: "1 hour ago", 
      icon: Info,
      color: "text-info"
    }
  ];

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "Warning":
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case "Info":
        return <Badge className="bg-info text-info-foreground">Info</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Alerts & Notifications</h1>
            <p className="text-muted-foreground">Stay informed about important events in your inventory</p>
          </div>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Configure Alerts
          </Button>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Requires immediate action</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Warnings</CardTitle>
              <Calendar className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Needs attention soon</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Info</CardTitle>
              <Info className="h-4 w-4 text-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">General updates</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Active Alerts
            </CardTitle>
            <CardDescription>
              Recent notifications and alerts requiring your attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => {
                const Icon = alert.icon;
                return (
                  <div key={alert.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className={`flex-shrink-0 ${alert.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{alert.title}</h4>
                        {getTypeBadge(alert.type)}
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Dismiss</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Alert Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Settings</CardTitle>
            <CardDescription>Configure how and when you receive notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Notification Channels</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Email Notifications
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    SMS Alerts
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    In-App Notifications
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Alert Thresholds</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Expiry Date Warnings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Low Stock Levels
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    System Maintenance
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Alerts;