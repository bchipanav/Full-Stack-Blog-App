import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInInput } from './dto/sign.input';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import { User } from '@prisma/client';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('No user found');
    }

    const passwordMatched =
      user.password && (await verify(user.password, password));
    if (!passwordMatched) {
      throw new UnauthorizedException('Invalid password');
    }
    return user;
  }

  async generateToken(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      accessToken,
    };
  }
  async validateJwtUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new UnauthorizedException('No user found');
    const currentUser = { id: user.id };
    return currentUser;
  }
  async validateGoogleUser(googleUser: CreateUserInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: googleUser.email,
      },
    });
    if (user) {
      const { password, ...authUser } = user;
      return authUser;
    }

    const dbUser = await this.prisma.user.create({
      data: {
        ...googleUser,
      },
    });
    const { password, ...authUser } = dbUser;
    authUser;
  }
}
