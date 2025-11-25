import { format, formatDistanceToNow, isToday, isThisWeek, isThisMonth, addDays } from 'date-fns';

export function formatDate(date: Date): string {
  return format(date, 'MMM dd, yyyy');
}

export function formatDateTime(date: Date): string {
  return format(date, 'MMM dd, yyyy HH:mm');
}

export function formatTime(date: Date): string {
  return format(date, 'HH:mm');
}

export function formatRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

export function isExpiringToday(date: Date): boolean {
  return isToday(date);
}

export function isExpiringThisWeek(date: Date): boolean {
  return isThisWeek(date);
}

export function isExpiringThisMonth(date: Date): boolean {
  return isThisMonth(date);
}

export function generateFutureDate(daysFromNow: number): Date {
  return addDays(new Date(), daysFromNow);
}

export function getDaysLeftText(daysLeft: number): string {
  if (daysLeft < 0) return 'Expired';
  if (daysLeft === 0) return 'Today';
  if (daysLeft === 1) return '1 day';
  return `${daysLeft} days`;
}
