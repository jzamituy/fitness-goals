import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUserRolesInput {

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

    @Field(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
}
