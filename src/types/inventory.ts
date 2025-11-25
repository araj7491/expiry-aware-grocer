export type UrgencyLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export type ProductCategory = 'Bakery' | 'Fruits' | 'Dairy' | 'Vegetables' | 'Meat' | 'Seafood' | 'Grains';

export interface Product {
  id: string;
  product: string;
  category: ProductCategory;
  quantity: string;
  expiryDate: Date;
  daysLeft: number;
  batchLot: string;
  urgency: UrgencyLevel;
  categoryIcon: string;
  price?: number;
  supplier?: string;
  location?: string;
}

export interface InventoryMetrics {
  expiringToday: number;
  expiringThisWeek: number;
  expiringThisMonth: number;
  totalProducts: number;
  totalValue: number;
  wastePrevented: number;
}
