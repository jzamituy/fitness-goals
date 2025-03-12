import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUserRolesInput {

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

    @Field(() => RolePermissionCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput;
}
