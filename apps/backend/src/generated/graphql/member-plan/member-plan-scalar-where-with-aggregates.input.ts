import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumPlanStatusWithAggregatesFilter } from '../prisma/enum-plan-status-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class MemberPlanScalarWhereWithAggregatesInput {

    @Field(() => [MemberPlanScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MemberPlanScalarWhereWithAggregatesInput>;

    @Field(() => [MemberPlanScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MemberPlanScalarWhereWithAggregatesInput>;

    @Field(() => [MemberPlanScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MemberPlanScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    gymMemberId?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    planTemplateId?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumPlanStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPlanStatusWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
