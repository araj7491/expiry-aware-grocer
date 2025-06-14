import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, Database, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Products", value: "1,247", icon: Database, change: "+12%" },
    { title: "Expiring Soon", value: "23", icon: AlertTriangle, change: "-5%" },
    { title: "Low Stock Items", value: "15", icon: Calendar, change: "+3%" },
    { title: "Active Users", value: "42", icon: Users, change: "+8%" },
  ];

  const expiringItems = [
    { name: "Organic Bananas", category: "Fruits", expires: "2 days", batch: "BN2024001" },
    { name: "Fresh Milk", category: "Dairy", expires: "3 days", batch: "ML2024089" },
    { name: "Whole Wheat Bread", category: "Bakery", expires: "1 day", batch: "BR2024156" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <Button>Add Product</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Expiring Items Alert */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Items Expiring Soon
          </CardTitle>
          <CardDescription>
            Products that need immediate attention to prevent waste
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expiringItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.category} • Batch: {item.batch}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Expires in {item.expires}</Badge>
                  <Button variant="outline" size="sm">
                    Action
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;