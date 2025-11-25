import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  variant?: 'default' | 'critical' | 'warning' | 'success';
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  className,
  variant = 'default',
}: MetricCardProps) {
  const borderColors = {
    default: 'border-l-primary',
    critical: 'border-l-destructive',
    warning: 'border-l-warning',
    success: 'border-l-success',
  };

  const iconColors = {
    default: 'text-primary',
    critical: 'text-destructive',
    warning: 'text-warning',
    success: 'text-success',
  };

  return (
    <Card className={cn('border-l-4', borderColors[variant], className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn('h-4 w-4', iconColors[variant])} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            'text-xs mt-1',
            trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          )}>
            {trend.isPositive ? '+' : ''}{trend.value}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}
