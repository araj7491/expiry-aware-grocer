import { useState } from 'react';
import { Bell, AlertCircle, Thermometer, Package, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockAlertsData, mockAlertStats } from '@/data/mockAlerts';
import { formatRelativeTime } from '@/lib/dateHelpers';
import { MetricCard } from '@/components/dashboard/MetricCard';

export default function Alerts() {
  const [filter, setFilter] = useState('all');

  const filteredAlerts = mockAlertsData.filter((alert) => {
    if (filter === 'all') return true;
    return alert.priority === filter;
  });

  const getAlertIcon = (type: string) => {
    const icons = {
      expiry: Bell,
      temperature: Thermometer,
      'low-stock': Package,
      quality: AlertCircle,
      system: Activity,
    };
    return icons[type as keyof typeof icons] || Bell;
  };

  const getPriorityVariant = (priority: string) => {
    const variants = {
      critical: 'destructive' as const,
      high: 'default' as const,
      medium: 'secondary' as const,
      low: 'outline' as const,
    };
    return variants[priority as keyof typeof variants] || 'outline';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
        <p className="text-muted-foreground">Manage and monitor system alerts</p>
      </div>

      {/* Alert Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard title="Total Alerts" value={mockAlertStats.total} icon={Bell} />
        <MetricCard title="Critical" value={mockAlertStats.critical} icon={AlertCircle} variant="critical" />
        <MetricCard title="High Priority" value={mockAlertStats.high} icon={Bell} variant="warning" />
        <MetricCard title="Unread" value={mockAlertStats.unread} icon={Bell} />
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>All Alerts</CardTitle>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAlerts.map((alert) => {
              const Icon = getAlertIcon(alert.type);
              return (
                <div key={alert.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <Icon className={`h-6 w-6 mt-1 ${
                    alert.priority === 'critical' ? 'text-destructive' :
                    alert.priority === 'high' ? 'text-warning' :
                    'text-muted-foreground'
                  }`} />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{alert.title}</h3>
                        {!alert.read && (
                          <Badge variant="destructive" className="h-2 w-2 p-0 rounded-full" />
                        )}
                      </div>
                      <Badge variant={getPriorityVariant(alert.priority)}>
                        {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {formatRelativeTime(alert.timestamp)}
                      </p>
                      {alert.actionRequired && (
                        <Button size="sm" variant="outline">Take Action</Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
