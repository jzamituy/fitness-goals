import { Injectable } from '@nestjs/common';
import { Coach } from '../generated/graphql/coach/coach.model';
import { GymMember } from '../generated/graphql/gym-member/gym-member.model';
import { Notification } from '../generated/graphql/notification/notification.model';
import { Nutritionist } from '../generated/graphql/nutritionist/nutritionist.model';
import { UserRole } from '../generated/graphql/user-role/user-role.model';
import { FindManyUserArgs } from '../generated/graphql/user/find-many-user.args';
import { FindUniqueUserArgs } from '../generated/graphql/user/find-unique-user.args';
import { UserCreateInput } from '../generated/graphql/user/user-create.input';
import { UserUpdateInput } from '../generated/graphql/user/user-update.input';
import { User } from '../generated/graphql/user/user.model';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findMany(args: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }

  async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }

  async create(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getGymMember(userId: string): Promise<GymMember | null> {
    return this.prisma.gymMember.findUnique({
      where: { userId },
    });
  }

  async getCoach(userId: string): Promise<Coach | null> {
    return this.prisma.coach.findUnique({
      where: { userId },
    });
  }

  async getNutritionist(userId: string): Promise<Nutritionist | null> {
    return this.prisma.nutritionist.findUnique({
      where: { userId },
    });
  }

  async getUserRoles(userId: string): Promise<UserRole[]> {
    return this.prisma.userRole.findMany({
      where: { userId },
    });
  }

  async getNotifications(userId: string): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { userId },
    });
  }
}
