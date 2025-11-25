import type { User } from '@/types/dashboard';
import { addDays, addHours, addMinutes } from 'date-fns';

const now = new Date();

export const mockUsersData: User[] = [
  {
    id: '1',
    name: 'Ankit Raj',
    email: 'araj7491@gmail.com',
    role: 'admin',
    status: 'active',
    lastLogin: addMinutes(now, -30),
    facility: 'All Facilities',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@freshguard.in',
    role: 'operator',
    status: 'active',
    lastLogin: addHours(now, -2),
    facility: 'Cold Storage A1',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    email: 'priya.sharma@freshguard.in',
    role: 'operator',
    status: 'active',
    lastLogin: addHours(now, -4),
    facility: 'Cold Storage B2',
  },
  {
    id: '4',
    name: 'Amit Patel',
    email: 'amit.patel@freshguard.in',
    role: 'operator',
    status: 'active',
    lastLogin: addHours(now, -6),
    facility: 'Cold Storage C1',
  },
  {
    id: '5',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@freshguard.in',
    role: 'viewer',
    status: 'active',
    lastLogin: addHours(now, -8),
    facility: 'N/A',
  },
  {
    id: '6',
    name: 'Vikram Singh',
    email: 'vikram.singh@freshguard.in',
    role: 'operator',
    status: 'active',
    lastLogin: addDays(now, -1),
    facility: 'Cold Storage D1',
  },
  {
    id: '7',
    name: 'Neha Gupta',
    email: 'neha.gupta@freshguard.in',
    role: 'admin',
    status: 'active',
    lastLogin: addHours(now, -12),
    facility: 'All Facilities',
  },
  {
    id: '8',
    name: 'Arjun Mehta',
    email: 'arjun.mehta@freshguard.in',
    role: 'operator',
    status: 'inactive',
    lastLogin: addDays(now, -7),
    facility: 'Cold Storage B1',
  },
  {
    id: '9',
    name: 'Kavita Desai',
    email: 'kavita.desai@freshguard.in',
    role: 'viewer',
    status: 'active',
    lastLogin: addDays(now, -2),
    facility: 'N/A',
  },
  {
    id: '10',
    name: 'Rahul Verma',
    email: 'rahul.verma@freshguard.in',
    role: 'operator',
    status: 'active',
    lastLogin: addHours(now, -18),
    facility: 'Cold Storage A2',
  },
];

export const currentUser: User = mockUsersData[0]; // Ankit Raj as current logged-in user
