import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserRolesInput } from '../user/user-create-nested-one-without-user-roles.input';

@InputType()
export class UserRoleCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserRolesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserRolesInput;
}
