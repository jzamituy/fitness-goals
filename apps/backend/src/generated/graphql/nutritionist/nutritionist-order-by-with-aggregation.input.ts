import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NutritionistCountOrderByAggregateInput } from './nutritionist-count-order-by-aggregate.input';
import { NutritionistAvgOrderByAggregateInput } from './nutritionist-avg-order-by-aggregate.input';
import { NutritionistMaxOrderByAggregateInput } from './nutritionist-max-order-by-aggregate.input';
import { NutritionistMinOrderByAggregateInput } from './nutritionist-min-order-by-aggregate.input';
import { NutritionistSumOrderByAggregateInput } from './nutritionist-sum-order-by-aggregate.input';

@InputType()
export class NutritionistOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    specialties?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    certification?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    experience?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    biography?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    availability?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => NutritionistCountOrderByAggregateInput, {nullable:true})
    _count?: NutritionistCountOrderByAggregateInput;

    @Field(() => NutritionistAvgOrderByAggregateInput, {nullable:true})
    _avg?: NutritionistAvgOrderByAggregateInput;

    @Field(() => NutritionistMaxOrderByAggregateInput, {nullable:true})
    _max?: NutritionistMaxOrderByAggregateInput;

    @Field(() => NutritionistMinOrderByAggregateInput, {nullable:true})
    _min?: NutritionistMinOrderByAggregateInput;

    @Field(() => NutritionistSumOrderByAggregateInput, {nullable:true})
    _sum?: NutritionistSumOrderByAggregateInput;
}
