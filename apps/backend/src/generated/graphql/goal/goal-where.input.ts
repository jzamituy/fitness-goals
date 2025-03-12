import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumGoalStatusFilter } from '../prisma/enum-goal-status-filter.input';
import { GymMemberScalarRelationFilter } from '../gym-member/gym-member-scalar-relation-filter.input';

@InputType()
export class GoalWhereInput {

    @Field(() => [GoalWhereInput], {nullable:true})
    AND?: Array<GoalWhereInput>;

    @Field(() => [GoalWhereInput], {nullable:true})
    OR?: Array<GoalWhereInput>;

    @Field(() => [GoalWhereInput], {nullable:true})
    NOT?: Array<GoalWhereInput>;

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

    @Field(() => GymMemberScalarRelationFilter, {nullable:true})
    gymMember?: GymMemberScalarRelationFilter;
}
