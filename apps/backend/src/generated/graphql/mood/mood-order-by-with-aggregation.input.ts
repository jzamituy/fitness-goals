import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MoodCountOrderByAggregateInput } from './mood-count-order-by-aggregate.input';
import { MoodMaxOrderByAggregateInput } from './mood-max-order-by-aggregate.input';
import { MoodMinOrderByAggregateInput } from './mood-min-order-by-aggregate.input';

@InputType()
export class MoodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gymMemberId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    date?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    level?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => MoodCountOrderByAggregateInput, {nullable:true})
    _count?: MoodCountOrderByAggregateInput;

    @Field(() => MoodMaxOrderByAggregateInput, {nullable:true})
    _max?: MoodMaxOrderByAggregateInput;

    @Field(() => MoodMinOrderByAggregateInput, {nullable:true})
    _min?: MoodMinOrderByAggregateInput;
}
