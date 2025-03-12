import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserRoleScalarWhereWithAggregatesInput {

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => [UserRoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRoleScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    userId?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    roleId?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
