import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInput } from '../user-role/user-role-unchecked-create-nested-many-without-role.input';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInput } from '../role-permission/role-permission-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {

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

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
}
