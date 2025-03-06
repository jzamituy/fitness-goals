import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        coach: true,
        coachees: true,
        nutritionist: true,
        clients: true,
      },
    });
    return users as unknown as User[];
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        coach: true,
        coachees: true,
        nutritionist: true,
        clients: true,
      },
    });
    return user as unknown as User;
  }

  async create(data: CreateUserInput): Promise<User> {
    const user = await this.prisma.user.create({
      data,
      include: {
        coach: true,
        coachees: true,
        nutritionist: true,
        clients: true,
      },
    });
    return user as unknown as User;
  }
}
