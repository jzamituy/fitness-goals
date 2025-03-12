import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { NutritionistCountAggregate } from './nutritionist-count-aggregate.output';
import { NutritionistAvgAggregate } from './nutritionist-avg-aggregate.output';
import { NutritionistSumAggregate } from './nutritionist-sum-aggregate.output';
import { NutritionistMinAggregate } from './nutritionist-min-aggregate.output';
import { NutritionistMaxAggregate } from './nutritionist-max-aggregate.output';

@ObjectType()
export class NutritionistGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [String], {nullable:true})
    specialties?: Array<string>;

    @Field(() => String, {nullable:true})
    certification?: string;

    @Field(() => Int, {nullable:true})
    experience?: number;

    @Field(() => String, {nullable:true})
    biography?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    availability?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
