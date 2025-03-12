import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GoalStatus } from '../prisma/goal-status.enum';
import { GoalCountAggregate } from './goal-count-aggregate.output';
import { GoalMinAggregate } from './goal-min-aggregate.output';
import { GoalMaxAggregate } from './goal-max-aggregate.output';

@ObjectType()
export class GoalGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => GoalStatus, {nullable:false})
    status!: `${GoalStatus}`;

    @Field(() => String, {nullable:false})
    diet!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => GoalCountAggregate, {nullable:true})
    _count?: GoalCountAggregate;

    @Field(() => GoalMinAggregate, {nullable:true})
    _min?: GoalMinAggregate;

    @Field(() => GoalMaxAggregate, {nullable:true})
    _max?: GoalMaxAggregate;
}
