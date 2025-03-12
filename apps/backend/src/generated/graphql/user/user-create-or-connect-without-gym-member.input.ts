import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGymMemberInput } from './user-create-without-gym-member.input';

@InputType()
export class UserCreateOrConnectWithoutGymMemberInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => UserCreateWithoutGymMemberInput)
    create!: UserCreateWithoutGymMemberInput;
}
