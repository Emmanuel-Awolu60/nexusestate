import { Controller, Get, Param, Query, Render, NotFoundException } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { AgentsService } from '../agents/agents.service';

@Controller()
export class PropertiesController {
  constructor(
    private readonly propertiesService: PropertiesService,
    private readonly agentsService: AgentsService,
  ) {}

  @Get('/')
  @Render('index')
  getHome() {
    const featured = this.propertiesService.findFeatured();
    const stats = this.propertiesService.getStats();
    const agents = this.agentsService.findAll();
    return {
      title: 'NexusEstate – Premium Real Estate',
      featured,
      stats,
      agents,
      page: 'home',
    };
  }

  @Get('/properties')
  @Render('properties')
  getProperties(@Query('type') type?: string, @Query('category') category?: string, @Query('city') city?: string) {
    const properties = this.propertiesService.findAll({ type, category, city });
    const cities = this.propertiesService.getCities();
    return {
      title: 'Properties – NexusEstate',
      properties,
      cities,
      activeType: type || 'all',
      activeCategory: category || 'all',
      activeCity: city || 'all',
      page: 'properties',
    };
  }

  @Get('/properties/:slug')
  @Render('property-detail')
  getProperty(@Param('slug') slug: string) {
    const property = this.propertiesService.findBySlug(slug);
    if (!property) throw new NotFoundException('Property not found');
    const agent = this.agentsService.findById(property.agentId);
    const related = this.propertiesService.findAll({ category: property.category })
      .filter(p => p.id !== property.id)
      .slice(0, 3);
    return {
      title: `${property.title} – NexusEstate`,
      property,
      agent,
      related,
      page: 'properties',
    };
  }

  @Get('/about')
  @Render('about')
  getAbout() {
    const agents = this.agentsService.findAll();
    const stats = this.propertiesService.getStats();
    return {
      title: 'About Us – NexusEstate',
      agents,
      stats,
      page: 'about',
    };
  }

  @Get('/contact')
  @Render('contact')
  getContact() {
    return {
      title: 'Contact – NexusEstate',
      page: 'contact',
    };
  }
}
