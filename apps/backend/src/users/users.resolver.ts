import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
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
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async users(@Args() args: FindManyUserArgs): Promise<User[]> {
    return this.usersService.findMany(args);
  }

  @Query(() => User, { nullable: true })
  async user(@Args() args: FindUniqueUserArgs): Promise<User | null> {
    return this.usersService.findUnique(args);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserCreateInput): Promise<User> {
    return this.usersService.create(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('data') data: UserUpdateInput,
    @Args('id') id: string,
  ): Promise<User> {
    return this.usersService.update(id, data);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }

  @ResolveField(() => GymMember, { nullable: true })
  async gymMember(@Parent() user: User): Promise<GymMember | null> {
    return this.usersService.getGymMember(user.id);
  }

  @ResolveField(() => Coach, { nullable: true })
  async coach(@Parent() user: User): Promise<Coach | null> {
    return this.usersService.getCoach(user.id);
  }

  @ResolveField(() => Nutritionist, { nullable: true })
  async nutritionist(@Parent() user: User): Promise<Nutritionist | null> {
    return this.usersService.getNutritionist(user.id);
  }

  @ResolveField(() => [UserRole])
  async userRoles(@Parent() user: User): Promise<UserRole[]> {
    return this.usersService.getUserRoles(user.id);
  }

  @ResolveField(() => [Notification])
  async notifications(@Parent() user: User): Promise<Notification[]> {
    return this.usersService.getNotifications(user.id);
  }
}
