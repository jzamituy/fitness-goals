import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { UserRoleCreateNestedManyWithoutUserInput } from '../user-role/user-role-create-nested-many-without-user.input';
import { GymMemberCreateNestedOneWithoutUserInput } from '../gym-member/gym-member-create-nested-one-without-user.input';
import { CoachCreateNestedOneWithoutUserInput } from '../coach/coach-create-nested-one-without-user.input';
import { NotificationCreateNestedManyWithoutUserInput } from '../notification/notification-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutNutritionistInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserStatus, {nullable:true})
    status?: `${UserStatus}`;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => UserRoleCreateNestedManyWithoutUserInput, {nullable:true})
    userRoles?: UserRoleCreateNestedManyWithoutUserInput;

    @Field(() => GymMemberCreateNestedOneWithoutUserInput, {nullable:true})
    gymMember?: GymMemberCreateNestedOneWithoutUserInput;

    @Field(() => CoachCreateNestedOneWithoutUserInput, {nullable:true})
    coach?: CoachCreateNestedOneWithoutUserInput;

    @Field(() => NotificationCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutUserInput;
}
