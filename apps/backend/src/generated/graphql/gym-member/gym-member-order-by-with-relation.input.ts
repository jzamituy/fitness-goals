import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { GoalOrderByRelationAggregateInput } from '../goal/goal-order-by-relation-aggregate.input';
import { AttendanceOrderByRelationAggregateInput } from '../attendance/attendance-order-by-relation-aggregate.input';
import { MoodOrderByRelationAggregateInput } from '../mood/mood-order-by-relation-aggregate.input';
import { AlertOrderByRelationAggregateInput } from '../alert/alert-order-by-relation-aggregate.input';
import { MemberPlanOrderByRelationAggregateInput } from '../member-plan/member-plan-order-by-relation-aggregate.input';
import { CoachOrderByWithRelationInput } from '../coach/coach-order-by-with-relation.input';
import { NutritionistOrderByWithRelationInput } from '../nutritionist/nutritionist-order-by-with-relation.input';

@InputType()
export class GymMemberOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    membershipId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    coachId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    nutritionistId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => GoalOrderByRelationAggregateInput, {nullable:true})
    goals?: GoalOrderByRelationAggregateInput;

    @Field(() => AttendanceOrderByRelationAggregateInput, {nullable:true})
    attendances?: AttendanceOrderByRelationAggregateInput;

    @Field(() => MoodOrderByRelationAggregateInput, {nullable:true})
    moods?: MoodOrderByRelationAggregateInput;

    @Field(() => AlertOrderByRelationAggregateInput, {nullable:true})
    alerts?: AlertOrderByRelationAggregateInput;

    @Field(() => MemberPlanOrderByRelationAggregateInput, {nullable:true})
    memberPlans?: MemberPlanOrderByRelationAggregateInput;

    @Field(() => CoachOrderByWithRelationInput, {nullable:true})
    coach?: CoachOrderByWithRelationInput;

    @Field(() => NutritionistOrderByWithRelationInput, {nullable:true})
    nutritionist?: NutritionistOrderByWithRelationInput;
}
