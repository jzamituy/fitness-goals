import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanTemplateCountAggregate } from './plan-template-count-aggregate.output';
import { PlanTemplateAvgAggregate } from './plan-template-avg-aggregate.output';
import { PlanTemplateSumAggregate } from './plan-template-sum-aggregate.output';
import { PlanTemplateMinAggregate } from './plan-template-min-aggregate.output';
import { PlanTemplateMaxAggregate } from './plan-template-max-aggregate.output';

@ObjectType()
export class AggregatePlanTemplate {

    @Field(() => PlanTemplateCountAggregate, {nullable:true})
    _count?: PlanTemplateCountAggregate;

    @Field(() => PlanTemplateAvgAggregate, {nullable:true})
    _avg?: PlanTemplateAvgAggregate;

    @Field(() => PlanTemplateSumAggregate, {nullable:true})
    _sum?: PlanTemplateSumAggregate;

    @Field(() => PlanTemplateMinAggregate, {nullable:true})
    _min?: PlanTemplateMinAggregate;

    @Field(() => PlanTemplateMaxAggregate, {nullable:true})
    _max?: PlanTemplateMaxAggregate;
}
