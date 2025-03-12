import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutritionistCountAggregate } from './nutritionist-count-aggregate.output';
import { NutritionistAvgAggregate } from './nutritionist-avg-aggregate.output';
import { NutritionistSumAggregate } from './nutritionist-sum-aggregate.output';
import { NutritionistMinAggregate } from './nutritionist-min-aggregate.output';
import { NutritionistMaxAggregate } from './nutritionist-max-aggregate.output';

@ObjectType()
export class AggregateNutritionist {

    @Field(() => NutritionistCountAggregate, {nullable:true})
    _count?: NutritionistCountAggregate;

    @Field(() => NutritionistAvgAggregate, {nullable:true})
    _avg?: NutritionistAvgAggregate;

    @Field(() => NutritionistSumAggregate, {nullable:true})
    _sum?: NutritionistSumAggregate;

    @Field(() => NutritionistMinAggregate, {nullable:true})
    _min?: NutritionistMinAggregate;

    @Field(() => NutritionistMaxAggregate, {nullable:true})
    _max?: NutritionistMaxAggregate;
}
