import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserRolesInput } from './user-update-without-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRolesInput } from './user-create-without-user-roles.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserRolesInput {

    @Field(() => UserUpdateWithoutUserRolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserRolesInput)
    update!: UserUpdateWithoutUserRolesInput;

    @Field(() => UserCreateWithoutUserRolesInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRolesInput)
    create!: UserCreateWithoutUserRolesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
