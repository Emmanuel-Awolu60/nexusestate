import { Injectable } from '@nestjs/common';
import { PROPERTIES, Property } from './properties.data';

@Injectable()
export class PropertiesService {
  findAll(filters?: { type?: string; category?: string; city?: string }): Property[] {
    let results = [...PROPERTIES];
    if (filters?.type && filters.type !== 'all') {
      results = results.filter(p => p.type === filters.type);
    }
    if (filters?.category && filters.category !== 'all') {
      results = results.filter(p => p.category === filters.category);
    }
    if (filters?.city && filters.city !== 'all') {
      results = results.filter(p => p.city.toLowerCase() === filters.city.toLowerCase());
    }
    return results;
  }

  findFeatured(): Property[] {
    return PROPERTIES.filter(p => p.featured).slice(0, 3);
  }

  findBySlug(slug: string): Property | undefined {
    return PROPERTIES.find(p => p.slug === slug);
  }

  findById(id: number): Property | undefined {
    return PROPERTIES.find(p => p.id === id);
  }

  getStats() {
    return {
      total: PROPERTIES.length,
      forSale: PROPERTIES.filter(p => p.type === 'sale').length,
      forRent: PROPERTIES.filter(p => p.type === 'rent').length,
      luxury: PROPERTIES.filter(p => p.category === 'luxury').length,
    };
  }

  getCities(): string[] {
    return [...new Set(PROPERTIES.map(p => p.city))];
  }
}
