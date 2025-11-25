import { Package, TrendingDown, IndianRupee, Bell, Warehouse, Thermometer } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDashboardMetrics, mockWasteReductionData, mockTemperatureData } from '@/data/mockMetrics';
import { mockAlertsData } from '@/data/mockAlerts';
import { formatRelativeTime } from '@/lib/dateHelpers';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Overview() {
  const recentAlerts = mockAlertsData.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back, Ankit. Here's your cold chain summary.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Total Inventory"
          value={mockDashboardMetrics.totalInventory}
          icon={Package}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Waste Prevented"
          value={`${mockDashboardMetrics.wastePrevented} tonnes`}
          icon={TrendingDown}
          variant="success"
          trend={{ value: 18, isPositive: true }}
        />
        <MetricCard
          title="Revenue Saved"
          value={`₹${(mockDashboardMetrics.revenueSaved / 100000).toFixed(1)}L`}
          icon={IndianRupee}
          variant="success"
          trend={{ value: 15, isPositive: true }}
        />
        <MetricCard
          title="Active Alerts"
          value={mockDashboardMetrics.activeAlerts}
          icon={Bell}
          variant="warning"
        />
        <MetricCard
          title="Cold Storage Facilities"
          value={mockDashboardMetrics.coldStorageFacilities}
          icon={Warehouse}
        />
        <MetricCard
          title="Avg Temperature"
          value={`${mockDashboardMetrics.averageTemperature}°C`}
          icon={Thermometer}
          variant="success"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Waste Reduction Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Waste Reduction Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockWasteReductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="wasteReduced"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                  name="Waste Reduced (tonnes)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0"
                >
                  <Bell className={`h-5 w-5 mt-0.5 ${
                    alert.priority === 'critical' ? 'text-destructive' :
                    alert.priority === 'high' ? 'text-warning' :
                    'text-muted-foreground'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium leading-none">{alert.title}</p>
                      {!alert.read && (
                        <Badge variant="destructive" className="h-2 w-2 p-0 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatRelativeTime(alert.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Temperature Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>Temperature Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTemperatureData.slice(-3).map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{data.facility}</p>
                    <p className="text-xs text-muted-foreground">
                      Humidity: {data.humidity}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{data.temperature}°C</p>
                    <Badge variant={
                      data.status === 'normal' ? 'secondary' :
                      data.status === 'warning' ? 'outline' : 'destructive'
                    }>
                      {data.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent transition-colors">
                <Package className="h-6 w-6 mb-2 text-secondary" />
                <span className="text-sm font-medium">Add Inventory</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent transition-colors">
                <Bell className="h-6 w-6 mb-2 text-warning" />
                <span className="text-sm font-medium">View Alerts</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent transition-colors">
                <TrendingDown className="h-6 w-6 mb-2 text-success" />
                <span className="text-sm font-medium">Reports</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-accent transition-colors">
                <Warehouse className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Facilities</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
