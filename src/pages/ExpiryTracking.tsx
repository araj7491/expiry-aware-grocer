import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, Calendar, Clock } from "lucide-react";

const ExpiryTracking = () => {
  const expiringProducts = [
    {
      id: "PRD003",
      name: "Whole Wheat Bread", 
      category: "Bakery",
      quantity: 25,
      expiryDate: "2024-06-16",
      daysLeft: 1,
      batch: "BR2024156",
      urgency: "Critical"
    },
    {
      id: "PRD001",
      name: "Organic Bananas",
      category: "Fruits", 
      quantity: 150,
      expiryDate: "2024-06-18",
      daysLeft: 2,
      batch: "BN2024001",
      urgency: "High"
    },
    {
      id: "PRD002",
      name: "Fresh Milk",
      category: "Dairy",
      quantity: 45,
      expiryDate: "2024-06-19",
      daysLeft: 3,
      batch: "ML2024089",
      urgency: "Medium"
    },
    {
      id: "PRD004",
      name: "Greek Yogurt",
      category: "Dairy",
      quantity: 30,
      expiryDate: "2024-06-22",
      daysLeft: 6,
      batch: "YG2024045",
      urgency: "Low"
    }
  ];

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "High":
        return <Badge className="bg-warning text-warning-foreground">High</Badge>;
      case "Medium":
        return <Badge className="bg-info text-info-foreground">Medium</Badge>;
      case "Low":
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">{urgency}</Badge>;
    }
  };

  const stats = [
    { title: "Expiring Today", value: "3", icon: AlertTriangle, color: "text-destructive" },
    { title: "Expiring This Week", value: "12", icon: Calendar, color: "text-warning" },
    { title: "Expiring This Month", value: "45", icon: Clock, color: "text-info" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Expiry Tracking</h1>
            <p className="text-muted-foreground">Monitor products approaching expiration dates</p>
          </div>
          <Button>Configure Alerts</Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    Requires immediate attention
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expiring Products Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Products Expiring Soon
            </CardTitle>
            <CardDescription>
              Products sorted by expiry date - take action to prevent waste
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Days Left</TableHead>
                  <TableHead>Batch/Lot</TableHead>
                  <TableHead>Urgency</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expiringProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.expiryDate}</TableCell>
                    <TableCell>{product.daysLeft} days</TableCell>
                    <TableCell>{product.batch}</TableCell>
                    <TableCell>{getUrgencyBadge(product.urgency)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Discount</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common actions for expiring products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 flex-col gap-2">
                <AlertTriangle className="h-6 w-6" />
                Mark as Discounted
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Calendar className="h-6 w-6" />
                Schedule Donation
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Clock className="h-6 w-6" />
                Extend Shelf Life
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ExpiryTracking;