import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationCountOrderByAggregateInput } from './notification-count-order-by-aggregate.input';
import { NotificationMaxOrderByAggregateInput } from './notification-max-order-by-aggregate.input';
import { NotificationMinOrderByAggregateInput } from './notification-min-order-by-aggregate.input';

@InputType()
export class NotificationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => NotificationCountOrderByAggregateInput, {nullable:true})
    _count?: NotificationCountOrderByAggregateInput;

    @Field(() => NotificationMaxOrderByAggregateInput, {nullable:true})
    _max?: NotificationMaxOrderByAggregateInput;

    @Field(() => NotificationMinOrderByAggregateInput, {nullable:true})
    _min?: NotificationMinOrderByAggregateInput;
}
