import type { DashboardMetrics, TemperatureData, WasteReductionData, CategoryBreakdown } from '@/types/dashboard';
import { addHours } from 'date-fns';

const now = new Date();

export const mockDashboardMetrics: DashboardMetrics = {
  totalInventory: 25,
  wastePrevented: 125, // in tonnes
  revenueSaved: 1250000, // ₹12.5 Lakhs
  activeAlerts: 7,
  coldStorageFacilities: 8,
  averageTemperature: 4.2,
};

export const mockTemperatureData: TemperatureData[] = [
  {
    timestamp: addHours(now, -6),
    temperature: 3.8,
    humidity: 65,
    facility: 'Cold Storage A1',
    status: 'normal',
  },
  {
    timestamp: addHours(now, -5),
    temperature: 4.1,
    humidity: 67,
    facility: 'Cold Storage A1',
    status: 'normal',
  },
  {
    timestamp: addHours(now, -4),
    temperature: 4.5,
    humidity: 68,
    facility: 'Cold Storage A1',
    status: 'normal',
  },
  {
    timestamp: addHours(now, -3),
    temperature: 5.2,
    humidity: 70,
    facility: 'Cold Storage A1',
    status: 'warning',
  },
  {
    timestamp: addHours(now, -2),
    temperature: 6.8,
    humidity: 75,
    facility: 'Cold Storage A1',
    status: 'warning',
  },
  {
    timestamp: addHours(now, -1),
    temperature: 4.3,
    humidity: 66,
    facility: 'Cold Storage A1',
    status: 'normal',
  },
];

export const mockWasteReductionData: WasteReductionData[] = [
  { month: 'Jan', wasteReduced: 8.5, revenueSaved: 85000 },
  { month: 'Feb', wasteReduced: 9.2, revenueSaved: 92000 },
  { month: 'Mar', wasteReduced: 10.5, revenueSaved: 105000 },
  { month: 'Apr', wasteReduced: 11.8, revenueSaved: 118000 },
  { month: 'May', wasteReduced: 12.5, revenueSaved: 125000 },
  { month: 'Jun', wasteReduced: 13.2, revenueSaved: 132000 },
  { month: 'Jul', wasteReduced: 14.5, revenueSaved: 145000 },
  { month: 'Aug', wasteReduced: 15.8, revenueSaved: 158000 },
  { month: 'Sep', wasteReduced: 16.2, revenueSaved: 162000 },
  { month: 'Oct', wasteReduced: 17.5, revenueSaved: 175000 },
  { month: 'Nov', wasteReduced: 18.2, revenueSaved: 182000 },
];

export const mockCategoryBreakdown: CategoryBreakdown[] = [
  { category: 'Fruits', count: 6, value: 795000, percentage: 28 },
  { category: 'Vegetables', count: 6, value: 425400, percentage: 15 },
  { category: 'Dairy', count: 6, value: 569000, percentage: 20 },
  { category: 'Bakery', count: 3, value: 105000, percentage: 4 },
  { category: 'Meat', count: 2, value: 390000, percentage: 14 },
  { category: 'Seafood', count: 2, value: 390000, percentage: 14 },
  { category: 'Grains', count: 1, value: 500000, percentage: 18 },
];
