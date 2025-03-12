import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionRoleIdPermissionIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => String, {nullable:false})
    permissionId!: string;
}
