import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('signin')
  signin() {
    return this.authservice.signin();
  }

  @Post('signup')
  signup() {
    return this.authservice.signup();
  }
}
