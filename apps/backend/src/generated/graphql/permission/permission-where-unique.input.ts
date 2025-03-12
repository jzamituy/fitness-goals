import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionActionResourceCompoundUniqueInput } from './permission-action-resource-compound-unique.input';
import { PermissionWhereInput } from './permission-where.input';
import { EnumPermissionActionFilter } from '../prisma/enum-permission-action-filter.input';
import { EnumPermissionResourceFilter } from '../prisma/enum-permission-resource-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RolePermissionListRelationFilter } from '../role-permission/role-permission-list-relation-filter.input';

@InputType()
export class PermissionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PermissionActionResourceCompoundUniqueInput, {nullable:true})
    action_resource?: PermissionActionResourceCompoundUniqueInput;

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

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
