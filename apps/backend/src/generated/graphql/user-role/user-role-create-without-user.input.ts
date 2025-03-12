import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUserRolesInput } from '../role/role-create-nested-one-without-user-roles.input';

@InputType()
export class UserRoleCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutUserRolesInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUserRolesInput;
}
