import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionistCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    specialties!: number;

    @Field(() => Int, {nullable:false})
    certification!: number;

    @Field(() => Int, {nullable:false})
    experience!: number;

    @Field(() => Int, {nullable:false})
    biography!: number;

    @Field(() => Int, {nullable:false})
    availability!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
