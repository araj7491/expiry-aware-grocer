export interface DashboardMetrics {
  totalInventory: number;
  wastePrevented: number;
  revenueSaved: number;
  activeAlerts: number;
  coldStorageFacilities: number;
  averageTemperature: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'viewer';
  status: 'active' | 'inactive';
  lastLogin: Date;
  facility?: string;
}

export interface TemperatureData {
  timestamp: Date;
  temperature: number;
  humidity: number;
  facility: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface WasteReductionData {
  month: string;
  wasteReduced: number;
  revenueSaved: number;
}

export interface CategoryBreakdown {
  category: string;
  count: number;
  value: number;
  percentage: number;
}
