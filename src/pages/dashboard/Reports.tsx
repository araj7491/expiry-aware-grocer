import { FileText, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { mockWasteReductionData, mockCategoryBreakdown } from '@/data/mockMetrics';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#66BB6A', '#4A90E2', '#F5A623', '#9CCC65', '#E74C3C', '#2E7D32', '#C5E1A5'];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive waste reduction insights</p>
        </div>
        <Button><FileText className="h-4 w-4 mr-2" />Export PDF</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Waste Reduced (YTD)" value="125 tonnes" icon={TrendingDown} variant="success" />
        <MetricCard title="Revenue Saved (YTD)" value="₹12.5L" icon={FileText} variant="success" />
        <MetricCard title="Avg Monthly Savings" value="₹1.14L" icon={FileText} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Waste Reduction Trend (2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockWasteReductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="wasteReduced" stroke="hsl(var(--secondary))" name="Waste Reduced (tonnes)" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={mockCategoryBreakdown} dataKey="percentage" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
                  {mockCategoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Saved by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockWasteReductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenueSaved" fill="hsl(var(--secondary))" name="Revenue Saved (₹)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Value Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCategoryBreakdown.map((cat) => (
                <div key={cat.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{cat.category}</span>
                    <span className="font-medium">₹{(cat.value / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: `${cat.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
