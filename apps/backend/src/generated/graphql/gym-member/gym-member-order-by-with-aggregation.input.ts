import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GymMemberCountOrderByAggregateInput } from './gym-member-count-order-by-aggregate.input';
import { GymMemberMaxOrderByAggregateInput } from './gym-member-max-order-by-aggregate.input';
import { GymMemberMinOrderByAggregateInput } from './gym-member-min-order-by-aggregate.input';

@InputType()
export class GymMemberOrderByWithAggregationInput {

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

    @Field(() => GymMemberCountOrderByAggregateInput, {nullable:true})
    _count?: GymMemberCountOrderByAggregateInput;

    @Field(() => GymMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: GymMemberMaxOrderByAggregateInput;

    @Field(() => GymMemberMinOrderByAggregateInput, {nullable:true})
    _min?: GymMemberMinOrderByAggregateInput;
}
