import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CoachCountAggregate } from './coach-count-aggregate.output';
import { CoachAvgAggregate } from './coach-avg-aggregate.output';
import { CoachSumAggregate } from './coach-sum-aggregate.output';
import { CoachMinAggregate } from './coach-min-aggregate.output';
import { CoachMaxAggregate } from './coach-max-aggregate.output';

@ObjectType()
export class CoachGroupBy {

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

    @Field(() => CoachCountAggregate, {nullable:true})
    _count?: CoachCountAggregate;

    @Field(() => CoachAvgAggregate, {nullable:true})
    _avg?: CoachAvgAggregate;

    @Field(() => CoachSumAggregate, {nullable:true})
    _sum?: CoachSumAggregate;

    @Field(() => CoachMinAggregate, {nullable:true})
    _min?: CoachMinAggregate;

    @Field(() => CoachMaxAggregate, {nullable:true})
    _max?: CoachMaxAggregate;
}
