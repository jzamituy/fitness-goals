import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserRolesInput } from './user-update-without-user-roles.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserRolesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserRolesInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserRolesInput)
    data!: UserUpdateWithoutUserRolesInput;
}
