import { useState, useMemo } from 'react';
import { Timer, Calendar, TrendingUp, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { mockInventoryData } from '@/data/mockInventory';
import { formatDate, getDaysLeftText } from '@/lib/dateHelpers';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function ExpiryTracking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Calculate metrics
  const metrics = useMemo(() => {
    const today = mockInventoryData.filter((item) => item.daysLeft <= 0).length;
    const thisWeek = mockInventoryData.filter((item) => item.daysLeft <= 7).length;
    const thisMonth = mockInventoryData.filter((item) => item.daysLeft <= 30).length;
    return { today, thisWeek, thisMonth };
  }, []);

  // Filter data
  const filteredData = useMemo(() => {
    return mockInventoryData.filter((item) => {
      const matchesSearch = item.product.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const handleDiscount = (product: typeof mockInventoryData[0]) => {
    toast.success('Discount Applied', {
      description: `30% discount applied to ${product.quantity} ${product.product}`,
    });
  };

  const handleRemove = (product: typeof mockInventoryData[0]) => {
    toast.error('Product Removed', {
      description: `${product.product} (${product.batchLot}) removed from inventory`,
    });
  };

  const getUrgencyClass = (urgency: string) => {
    const classes = {
      Critical: 'urgency-critical',
      High: 'urgency-high',
      Medium: 'urgency-medium',
      Low: 'urgency-low',
    };
    return classes[urgency as keyof typeof classes] || '';
  };

  const getCategoryClass = (category: string) => {
    return `category-${category.toLowerCase()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Expiry Tracking</h1>
        <p className="text-muted-foreground">
          Monitor products approaching expiration dates
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard
          title="Expiring Today"
          value={metrics.today}
          icon={Timer}
          variant="critical"
        />
        <MetricCard
          title="Expiring This Week"
          value={metrics.thisWeek}
          icon={Calendar}
          variant="warning"
        />
        <MetricCard
          title="Expiring This Month"
          value={metrics.thisMonth}
          icon={TrendingUp}
          variant="default"
        />
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Products Expiring Soon</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Bakery">Bakery</SelectItem>
                <SelectItem value="Fruits">Fruits</SelectItem>
                <SelectItem value="Dairy">Dairy</SelectItem>
                <SelectItem value="Vegetables">Vegetables</SelectItem>
                <SelectItem value="Meat">Meat</SelectItem>
                <SelectItem value="Seafood">Seafood</SelectItem>
                <SelectItem value="Grains">Grains</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setCategoryFilter('all'); }}>
              Clear Filters
            </Button>
          </div>

          {/* Product Table */}
          <div className="rounded-md border">
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
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No products found matching your filters
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.categoryIcon}</span>
                          {item.product}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getCategoryClass(item.category)}>
                          {item.category}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{formatDate(item.expiryDate)}</TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            'font-semibold',
                            item.daysLeft <= 2 && 'text-destructive'
                          )}
                        >
                          {getDaysLeftText(item.daysLeft)}
                        </span>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{item.batchLot}</TableCell>
                      <TableCell>
                        <Badge className={getUrgencyClass(item.urgency)}>
                          {item.urgency}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDiscount(item)}
                          >
                            Discount
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleRemove(item)}
                          >
                            Remove
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
