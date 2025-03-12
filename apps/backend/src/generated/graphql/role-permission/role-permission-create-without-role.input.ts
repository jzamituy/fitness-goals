import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolePermissionsInput } from '../permission/permission-create-nested-one-without-role-permissions.input';

@InputType()
export class RolePermissionCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PermissionCreateNestedOneWithoutRolePermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolePermissionsInput;
}
