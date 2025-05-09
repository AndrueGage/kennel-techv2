import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Correct path to guard
import { Request } from 'express';  // Import Request from 'express'

@Controller('users')
export class UserController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)  // Use the JWT guard for this route
  getProfile(@new Request() req: Request) {
    return req.user;  // Access the user from the request object
  }
}