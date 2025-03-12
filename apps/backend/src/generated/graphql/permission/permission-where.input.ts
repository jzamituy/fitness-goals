import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumPermissionActionFilter } from '../prisma/enum-permission-action-filter.input';
import { EnumPermissionResourceFilter } from '../prisma/enum-permission-resource-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RolePermissionListRelationFilter } from '../role-permission/role-permission-list-relation-filter.input';

@InputType()
export class PermissionWhereInput {

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => EnumPermissionActionFilter, {nullable:true})
    action?: EnumPermissionActionFilter;

    @Field(() => EnumPermissionResourceFilter, {nullable:true})
    resource?: EnumPermissionResourceFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RolePermissionListRelationFilter, {nullable:true})
    rolePermissions?: RolePermissionListRelationFilter;
}
