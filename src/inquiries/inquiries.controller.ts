import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('inquiries')
export class InquiriesController {
  @Post()
  submitInquiry(@Body() body: any, @Res() res: Response) {
    // Production: save to DB, send email via nodemailer / SendGrid, etc.
    console.log('📩 New inquiry:', body);
    return res.redirect('/contact?success=true');
  }
}
