import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { UserRoleUncheckedCreateNestedManyWithoutUserInput } from '../user-role/user-role-unchecked-create-nested-many-without-user.input';
import { GymMemberUncheckedCreateNestedOneWithoutUserInput } from '../gym-member/gym-member-unchecked-create-nested-one-without-user.input';
import { CoachUncheckedCreateNestedOneWithoutUserInput } from '../coach/coach-unchecked-create-nested-one-without-user.input';
import { NutritionistUncheckedCreateNestedOneWithoutUserInput } from '../nutritionist/nutritionist-unchecked-create-nested-one-without-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => GymMemberUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    gymMember?: GymMemberUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => CoachUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    coach?: CoachUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => NutritionistUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    nutritionist?: NutritionistUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;
}
