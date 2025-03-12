import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { UserRole } from '../user-role/user-role.model';
import { GymMember } from '../gym-member/gym-member.model';
import { Coach } from '../coach/coach.model';
import { Nutritionist } from '../nutritionist/nutritionist.model';
import { Notification } from '../notification/notification.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserStatus, {defaultValue:'ACTIVE',nullable:false})
    status!: `${UserStatus}`;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => [UserRole], {nullable:true})
    userRoles?: Array<UserRole>;

    @Field(() => GymMember, {nullable:true})
    gymMember?: GymMember | null;

    @Field(() => Coach, {nullable:true})
    coach?: Coach | null;

    @Field(() => Nutritionist, {nullable:true})
    nutritionist?: Nutritionist | null;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
