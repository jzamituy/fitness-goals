import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutRoleInput } from '../user-role/user-role-create-nested-many-without-role.input';
import { RolePermissionCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserRoleCreateNestedManyWithoutRoleInput, {nullable:true})
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput;

    @Field(() => RolePermissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput;
}
