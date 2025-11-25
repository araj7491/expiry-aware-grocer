import type { UrgencyLevel } from '@/types/inventory';

export function calculateDaysLeft(expiryDate: Date): number {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function getUrgencyLevel(daysLeft: number): UrgencyLevel {
  if (daysLeft <= 2) return 'Critical';
  if (daysLeft <= 5) return 'High';
  if (daysLeft <= 10) return 'Medium';
  return 'Low';
}

export function getUrgencyColor(urgency: UrgencyLevel): string {
  const colors = {
    Critical: 'destructive',
    High: 'warning',
    Medium: 'info',
    Low: 'success',
  };
  return colors[urgency];
}

export function getUrgencyVariant(urgency: UrgencyLevel): 'default' | 'destructive' | 'secondary' | 'outline' {
  const variants = {
    Critical: 'destructive' as const,
    High: 'default' as const,
    Medium: 'secondary' as const,
    Low: 'outline' as const,
  };
  return variants[urgency];
}
