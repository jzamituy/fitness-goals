import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GoalCountAggregate } from './goal-count-aggregate.output';
import { GoalMinAggregate } from './goal-min-aggregate.output';
import { GoalMaxAggregate } from './goal-max-aggregate.output';

@ObjectType()
export class AggregateGoal {

    @Field(() => GoalCountAggregate, {nullable:true})
    _count?: GoalCountAggregate;

    @Field(() => GoalMinAggregate, {nullable:true})
    _min?: GoalMinAggregate;

    @Field(() => GoalMaxAggregate, {nullable:true})
    _max?: GoalMaxAggregate;
}
