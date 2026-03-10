import { Injectable } from '@nestjs/common';

export interface Agent {
  id: number;
  name: string;
  title: string;
  phone: string;
  email: string;
  bio: string;
  specialties: string[];
  deals: number;
  years: number;
  avatar: string;
}

const AGENTS: Agent[] = [
  {
    id: 1,
    name: 'Victoria Hale',
    title: 'Senior Luxury Advisor',
    phone: '+1 (212) 555-0194',
    email: 'v.hale@nexusestate.com',
    bio: 'With over 18 years specializing in ultra-luxury residential properties, Victoria has closed more than $2.4B in transactions across Manhattan, the Hamptons, and Greenwich. Her white-glove approach and discreet network make her the first call for discerning buyers and sellers.',
    specialties: ['Luxury Residential', 'Penthouses', 'New Development'],
    deals: 340,
    years: 18,
    avatar: 'agent1.jpg'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Commercial Division Lead',
    phone: '+1 (312) 555-0287',
    email: 'm.chen@nexusestate.com',
    bio: 'Marcus leads our commercial acquisitions team with a track record spanning office towers, mixed-use developments, and retail portfolios across the Midwest and East Coast. His analytical approach and deep broker relationships deliver unmatched market intelligence.',
    specialties: ['Office Leasing', 'Retail', 'Investment Properties'],
    deals: 210,
    years: 12,
    avatar: 'agent2.jpg'
  },
  {
    id: 3,
    name: 'Sophia Rivera',
    title: 'Coastal Properties Specialist',
    phone: '+1 (305) 555-0351',
    email: 's.rivera@nexusestate.com',
    bio: 'A Miami native with an architecture background, Sophia combines design sensibility with sharp market instincts. She specializes in waterfront estates, pre-construction luxury condos, and high-net-worth relocation services along the Florida coastline.',
    specialties: ['Waterfront', 'Luxury Condos', 'Pre-Construction'],
    deals: 185,
    years: 9,
    avatar: 'agent3.jpg'
  },
];

@Injectable()
export class AgentsService {
  findAll(): Agent[] {
    return AGENTS;
  }

  findById(id: number): Agent | undefined {
    return AGENTS.find(a => a.id === id);
  }
}
