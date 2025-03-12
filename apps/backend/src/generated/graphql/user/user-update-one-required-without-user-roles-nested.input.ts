import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRolesInput } from './user-create-without-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRolesInput } from './user-create-or-connect-without-user-roles.input';
import { UserUpsertWithoutUserRolesInput } from './user-upsert-without-user-roles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserRolesInput } from './user-update-to-one-with-where-without-user-roles.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserRolesNestedInput {

    @Field(() => UserCreateWithoutUserRolesInput, {nullable:true})
    @Type(() => UserCreateWithoutUserRolesInput)
    create?: UserCreateWithoutUserRolesInput;

    @Field(() => UserCreateOrConnectWithoutUserRolesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserRolesInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput;

    @Field(() => UserUpsertWithoutUserRolesInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserRolesInput)
    upsert?: UserUpsertWithoutUserRolesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserRolesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserRolesInput)
    update?: UserUpdateToOneWithWhereWithoutUserRolesInput;
}
