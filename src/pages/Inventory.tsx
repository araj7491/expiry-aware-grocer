import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Database } from "lucide-react";

const Inventory = () => {
  const products = [
    {
      id: "PRD001",
      name: "Organic Bananas",
      category: "Fruits",
      quantity: 150,
      unit: "pieces",
      expiryDate: "2024-06-18",
      batch: "BN2024001",
      supplier: "Fresh Farm Co.",
      status: "In Stock"
    },
    {
      id: "PRD002", 
      name: "Fresh Milk",
      category: "Dairy",
      quantity: 45,
      unit: "liters",
      expiryDate: "2024-06-17",
      batch: "ML2024089",
      supplier: "Dairy Valley",
      status: "Low Stock"
    },
    {
      id: "PRD003",
      name: "Whole Wheat Bread",
      category: "Bakery",
      quantity: 25,
      unit: "loaves",
      expiryDate: "2024-06-16",
      batch: "BR2024156",
      supplier: "Golden Bakery",
      status: "Expiring Soon"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return <Badge className="bg-success text-success-foreground">In Stock</Badge>;
      case "Low Stock":
        return <Badge className="bg-warning text-warning-foreground">Low Stock</Badge>;
      case "Expiring Soon":
        return <Badge variant="destructive">Expiring Soon</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
            <p className="text-muted-foreground">Track and manage your product inventory</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input placeholder="Search products..." className="max-w-sm" />
              <Button variant="outline">Filter by Category</Button>
              <Button variant="outline">Filter by Status</Button>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Product Inventory
            </CardTitle>
            <CardDescription>
              All products in your inventory with current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Batch/Lot</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.quantity} {product.unit}</TableCell>
                    <TableCell>{product.expiryDate}</TableCell>
                    <TableCell>{product.batch}</TableCell>
                    <TableCell>{product.supplier}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Inventory;