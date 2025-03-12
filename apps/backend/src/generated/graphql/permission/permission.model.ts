import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionAction } from '../prisma/permission-action.enum';
import { PermissionResource } from '../prisma/permission-resource.enum';
import { RolePermission } from '../role-permission/role-permission.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => PermissionAction, {nullable:false})
    action!: `${PermissionAction}`;

    @Field(() => PermissionResource, {nullable:false})
    resource!: `${PermissionResource}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RolePermission], {nullable:true})
    rolePermissions?: Array<RolePermission>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
