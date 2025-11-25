export type AlertType = 'expiry' | 'temperature' | 'low-stock' | 'quality' | 'system';

export type AlertPriority = 'critical' | 'high' | 'medium' | 'low';

export interface Alert {
  id: string;
  type: AlertType;
  priority: AlertPriority;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionRequired: boolean;
  productId?: string;
  facilityId?: string;
}

export interface AlertStats {
  total: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  unread: number;
}
