import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request as ExpressRequest } from 'express';  

@Controller('users')
export class UserController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req: ExpressRequest) {
    return req.user;
  }
}