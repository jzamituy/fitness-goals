import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsInput } from '../role/role-create-nested-one-without-permissions.input';
import { PermissionCreateNestedOneWithoutRolePermissionsInput } from '../permission/permission-create-nested-one-without-role-permissions.input';

@InputType()
export class RolePermissionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutPermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsInput;

    @Field(() => PermissionCreateNestedOneWithoutRolePermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolePermissionsInput;
}
