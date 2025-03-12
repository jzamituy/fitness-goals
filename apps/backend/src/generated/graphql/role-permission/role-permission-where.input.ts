import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleScalarRelationFilter } from '../role/role-scalar-relation-filter.input';
import { PermissionScalarRelationFilter } from '../permission/permission-scalar-relation-filter.input';

@InputType()
export class RolePermissionWhereInput {

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    AND?: Array<RolePermissionWhereInput>;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    OR?: Array<RolePermissionWhereInput>;

    @Field(() => [RolePermissionWhereInput], {nullable:true})
    NOT?: Array<RolePermissionWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    roleId?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    permissionId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;

    @Field(() => PermissionScalarRelationFilter, {nullable:true})
    permission?: PermissionScalarRelationFilter;
}
