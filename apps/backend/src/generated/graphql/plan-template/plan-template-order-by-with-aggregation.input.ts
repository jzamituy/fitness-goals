import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PlanTemplateCountOrderByAggregateInput } from './plan-template-count-order-by-aggregate.input';
import { PlanTemplateAvgOrderByAggregateInput } from './plan-template-avg-order-by-aggregate.input';
import { PlanTemplateMaxOrderByAggregateInput } from './plan-template-max-order-by-aggregate.input';
import { PlanTemplateMinOrderByAggregateInput } from './plan-template-min-order-by-aggregate.input';
import { PlanTemplateSumOrderByAggregateInput } from './plan-template-sum-order-by-aggregate.input';

@InputType()
export class PlanTemplateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    duration?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isActive?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PlanTemplateCountOrderByAggregateInput, {nullable:true})
    _count?: PlanTemplateCountOrderByAggregateInput;

    @Field(() => PlanTemplateAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlanTemplateAvgOrderByAggregateInput;

    @Field(() => PlanTemplateMaxOrderByAggregateInput, {nullable:true})
    _max?: PlanTemplateMaxOrderByAggregateInput;

    @Field(() => PlanTemplateMinOrderByAggregateInput, {nullable:true})
    _min?: PlanTemplateMinOrderByAggregateInput;

    @Field(() => PlanTemplateSumOrderByAggregateInput, {nullable:true})
    _sum?: PlanTemplateSumOrderByAggregateInput;
}
