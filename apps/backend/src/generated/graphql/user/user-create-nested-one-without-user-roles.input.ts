import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRolesInput } from './user-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRolesInput } from './user-create-or-connect-without-user-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserRolesInput {

    @Field(() => UserCreateWithoutUserRolesInput, {nullable:true})
    @Type(() => UserCreateWithoutUserRolesInput)
    create?: UserCreateWithoutUserRolesInput;

    @Field(() => UserCreateOrConnectWithoutUserRolesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserRolesInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
