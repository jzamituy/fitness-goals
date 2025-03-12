import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { GoalListRelationFilter } from '../goal/goal-list-relation-filter.input';
import { AttendanceListRelationFilter } from '../attendance/attendance-list-relation-filter.input';
import { MoodListRelationFilter } from '../mood/mood-list-relation-filter.input';
import { AlertListRelationFilter } from '../alert/alert-list-relation-filter.input';
import { MemberPlanListRelationFilter } from '../member-plan/member-plan-list-relation-filter.input';
import { CoachNullableScalarRelationFilter } from '../coach/coach-nullable-scalar-relation-filter.input';
import { NutritionistNullableScalarRelationFilter } from '../nutritionist/nutritionist-nullable-scalar-relation-filter.input';

@InputType()
export class GymMemberWhereInput {

    @Field(() => [GymMemberWhereInput], {nullable:true})
    AND?: Array<GymMemberWhereInput>;

    @Field(() => [GymMemberWhereInput], {nullable:true})
    OR?: Array<GymMemberWhereInput>;

    @Field(() => [GymMemberWhereInput], {nullable:true})
    NOT?: Array<GymMemberWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    userId?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    membershipId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    coachId?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    nutritionistId?: UuidNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => GoalListRelationFilter, {nullable:true})
    goals?: GoalListRelationFilter;

    @Field(() => AttendanceListRelationFilter, {nullable:true})
    attendances?: AttendanceListRelationFilter;

    @Field(() => MoodListRelationFilter, {nullable:true})
    moods?: MoodListRelationFilter;

    @Field(() => AlertListRelationFilter, {nullable:true})
    alerts?: AlertListRelationFilter;

    @Field(() => MemberPlanListRelationFilter, {nullable:true})
    memberPlans?: MemberPlanListRelationFilter;

    @Field(() => CoachNullableScalarRelationFilter, {nullable:true})
    coach?: CoachNullableScalarRelationFilter;

    @Field(() => NutritionistNullableScalarRelationFilter, {nullable:true})
    nutritionist?: NutritionistNullableScalarRelationFilter;
}
