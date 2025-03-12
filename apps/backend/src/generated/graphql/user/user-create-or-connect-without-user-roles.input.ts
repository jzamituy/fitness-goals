import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRolesInput } from './user-create-without-user-roles.input';

@InputType()
export class UserCreateOrConnectWithoutUserRolesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutUserRolesInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRolesInput)
    create!: UserCreateWithoutUserRolesInput;
}
