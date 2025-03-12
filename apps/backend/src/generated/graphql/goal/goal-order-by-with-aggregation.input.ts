import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GoalCountOrderByAggregateInput } from './goal-count-order-by-aggregate.input';
import { GoalMaxOrderByAggregateInput } from './goal-max-order-by-aggregate.input';
import { GoalMinOrderByAggregateInput } from './goal-min-order-by-aggregate.input';

@InputType()
export class GoalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gymMemberId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    diet?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => GoalCountOrderByAggregateInput, {nullable:true})
    _count?: GoalCountOrderByAggregateInput;

    @Field(() => GoalMaxOrderByAggregateInput, {nullable:true})
    _max?: GoalMaxOrderByAggregateInput;

    @Field(() => GoalMinOrderByAggregateInput, {nullable:true})
    _min?: GoalMinOrderByAggregateInput;
}
