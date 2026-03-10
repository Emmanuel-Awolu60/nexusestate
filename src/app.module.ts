import { Module } from '@nestjs/common';
import { PropertiesModule } from './properties/properties.module';
import { AgentsModule } from './agents/agents.module';
import { InquiriesModule } from './inquiries/inquiries.module';

@Module({
  imports: [PropertiesModule, AgentsModule, InquiriesModule],
})
export class AppModule {}
