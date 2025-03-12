import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionCountOrderByAggregateInput } from './permission-count-order-by-aggregate.input';
import { PermissionMaxOrderByAggregateInput } from './permission-max-order-by-aggregate.input';
import { PermissionMinOrderByAggregateInput } from './permission-min-order-by-aggregate.input';

@InputType()
export class PermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    action?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    resource?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PermissionCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionCountOrderByAggregateInput;

    @Field(() => PermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionMaxOrderByAggregateInput;

    @Field(() => PermissionMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionMinOrderByAggregateInput;
}
