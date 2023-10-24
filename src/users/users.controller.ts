import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { Userinfo } from './UserInfo';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log('create', dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(111, dto);
    return dto.signupVerifyToken;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return dto.email;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<Userinfo> {
    console.log(userId);
    return { id: userId, name: 'paige', email: 'paige@gmail.com' };
  }
}
