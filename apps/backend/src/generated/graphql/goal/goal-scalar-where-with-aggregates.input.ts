import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumGoalStatusWithAggregatesFilter } from '../prisma/enum-goal-status-with-aggregates-filter.input';

@InputType()
export class GoalScalarWhereWithAggregatesInput {

    @Field(() => [GoalScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GoalScalarWhereWithAggregatesInput>;

    @Field(() => [GoalScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GoalScalarWhereWithAggregatesInput>;

    @Field(() => [GoalScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GoalScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    gymMemberId?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeWithAggregatesFilter;

    @Field(() => EnumGoalStatusWithAggregatesFilter, {nullable:true})
    status?: EnumGoalStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    diet?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
