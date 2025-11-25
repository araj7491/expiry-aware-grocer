import { Users as UsersIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockUsersData } from '@/data/mockUsers';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { formatRelativeTime } from '@/lib/dateHelpers';

export default function Users() {
  const activeUsers = mockUsersData.filter(u => u.status === 'active').length;
  const admins = mockUsersData.filter(u => u.role === 'admin').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage team members and access</p>
        </div>
        <Button>Add User</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Total Users" value={mockUsersData.length} icon={UsersIcon} />
        <MetricCard title="Active Users" value={activeUsers} icon={UsersIcon} variant="success" />
        <MetricCard title="Administrators" value={admins} icon={UsersIcon} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsersData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{user.facility}</TableCell>
                  <TableCell className="text-sm">{formatRelativeTime(user.lastLogin)}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'active' ? 'default' : 'outline'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
