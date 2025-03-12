import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AlertCountOrderByAggregateInput } from './alert-count-order-by-aggregate.input';
import { AlertMaxOrderByAggregateInput } from './alert-max-order-by-aggregate.input';
import { AlertMinOrderByAggregateInput } from './alert-min-order-by-aggregate.input';

@InputType()
export class AlertOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gymMemberId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reason?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AlertCountOrderByAggregateInput, {nullable:true})
    _count?: AlertCountOrderByAggregateInput;

    @Field(() => AlertMaxOrderByAggregateInput, {nullable:true})
    _max?: AlertMaxOrderByAggregateInput;

    @Field(() => AlertMinOrderByAggregateInput, {nullable:true})
    _min?: AlertMinOrderByAggregateInput;
}
