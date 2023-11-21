import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './auth.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma : PrismaService) {}
  async signin(dto: AuthDto) {

    const hash = await argon.hash(dto.password);
    
    console.log("hada hash " , hash);

    const user = await this.prisma.user.create({
      data: {
        email : dto.email,
        hash,
      },
    });

    console.log("hada useer " , user);
    return user;
  }

  signup() {
    return 'signup';
  }
}
