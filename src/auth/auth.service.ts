import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './auth.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signin(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    return user;
  }

  signup() {
    return 'signup';
  }
}

```c
npx @nestjs/cli new backEnd
```

And I installed Next Js using this commad
```c
npx create-next-app frontend
```
