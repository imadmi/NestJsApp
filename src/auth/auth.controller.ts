import { Body, Controller, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Get, Post } from '@nestjs/common';
import { AuthDto }  from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  // @Get('signin')
  @Post('signin')
  signin(@Body() dto : AuthDto) {
    // console.log(dto);


    return this.authservice.signin(dto);
  }

  @Post('signup')
  signup() {
    return this.authservice.signup();
  }
}
