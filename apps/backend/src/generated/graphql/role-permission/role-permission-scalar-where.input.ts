import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RolePermissionScalarWhereInput {

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    AND?: Array<RolePermissionScalarWhereInput>;

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    OR?: Array<RolePermissionScalarWhereInput>;

    @Field(() => [RolePermissionScalarWhereInput], {nullable:true})
    NOT?: Array<RolePermissionScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    roleId?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    permissionId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
