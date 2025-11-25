import { Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockInventoryData, mockInventoryMetrics } from '@/data/mockInventory';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { formatDate } from '@/lib/dateHelpers';

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">Complete inventory overview</p>
        </div>
        <Button>Add Product</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Total Products" value={mockInventoryMetrics.totalProducts} icon={Package} />
        <MetricCard title="Total Value" value={`₹${(mockInventoryMetrics.totalValue / 100000).toFixed(1)}L`} icon={Package} variant="success" />
        <MetricCard title="Expiring Soon" value={mockInventoryMetrics.expiringThisWeek} icon={Package} variant="warning" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell><Badge variant="outline">{item.category}</Badge></TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell className="text-sm">{item.supplier}</TableCell>
                  <TableCell className="text-sm">{item.location}</TableCell>
                  <TableCell>{formatDate(item.expiryDate)}</TableCell>
                  <TableCell><Badge variant={item.daysLeft <= 5 ? 'destructive' : 'secondary'}>{item.daysLeft} days</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
