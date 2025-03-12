import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRolePermissionsInput } from './permission-create-without-role-permissions.input';

@InputType()
export class PermissionCreateOrConnectWithoutRolePermissionsInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'action_resource'>;

    @Field(() => PermissionCreateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRolePermissionsInput)
    create!: PermissionCreateWithoutRolePermissionsInput;
}
