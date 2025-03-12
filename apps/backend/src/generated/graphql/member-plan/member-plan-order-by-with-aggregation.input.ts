import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MemberPlanCountOrderByAggregateInput } from './member-plan-count-order-by-aggregate.input';
import { MemberPlanMaxOrderByAggregateInput } from './member-plan-max-order-by-aggregate.input';
import { MemberPlanMinOrderByAggregateInput } from './member-plan-min-order-by-aggregate.input';

@InputType()
export class MemberPlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gymMemberId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planTemplateId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    startDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    endDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => MemberPlanCountOrderByAggregateInput, {nullable:true})
    _count?: MemberPlanCountOrderByAggregateInput;

    @Field(() => MemberPlanMaxOrderByAggregateInput, {nullable:true})
    _max?: MemberPlanMaxOrderByAggregateInput;

    @Field(() => MemberPlanMinOrderByAggregateInput, {nullable:true})
    _min?: MemberPlanMinOrderByAggregateInput;
}
