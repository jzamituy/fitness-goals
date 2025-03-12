import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MemberPlanCountAggregate } from './member-plan-count-aggregate.output';
import { MemberPlanMinAggregate } from './member-plan-min-aggregate.output';
import { MemberPlanMaxAggregate } from './member-plan-max-aggregate.output';

@ObjectType()
export class AggregateMemberPlan {

    @Field(() => MemberPlanCountAggregate, {nullable:true})
    _count?: MemberPlanCountAggregate;

    @Field(() => MemberPlanMinAggregate, {nullable:true})
    _min?: MemberPlanMinAggregate;

    @Field(() => MemberPlanMaxAggregate, {nullable:true})
    _max?: MemberPlanMaxAggregate;
}
