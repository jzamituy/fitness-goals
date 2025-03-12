import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RolePermissionScalarWhereWithAggregatesInput {

    @Field(() => [RolePermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RolePermissionScalarWhereWithAggregatesInput>;

    @Field(() => [RolePermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RolePermissionScalarWhereWithAggregatesInput>;

    @Field(() => [RolePermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RolePermissionScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    roleId?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    permissionId?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
