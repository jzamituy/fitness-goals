import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumGoalStatusFilter } from '../prisma/enum-goal-status-filter.input';

@InputType()
export class GoalScalarWhereInput {

    @Field(() => [GoalScalarWhereInput], {nullable:true})
    AND?: Array<GoalScalarWhereInput>;

    @Field(() => [GoalScalarWhereInput], {nullable:true})
    OR?: Array<GoalScalarWhereInput>;

    @Field(() => [GoalScalarWhereInput], {nullable:true})
    NOT?: Array<GoalScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    gymMemberId?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => EnumGoalStatusFilter, {nullable:true})
    status?: EnumGoalStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    diet?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
