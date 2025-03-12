import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanCategory } from '../prisma/plan-category.enum';
import { PlanLevel } from '../prisma/plan-level.enum';
import { Int } from '@nestjs/graphql';
import { PlanTemplateCountAggregate } from './plan-template-count-aggregate.output';
import { PlanTemplateAvgAggregate } from './plan-template-avg-aggregate.output';
import { PlanTemplateSumAggregate } from './plan-template-sum-aggregate.output';
import { PlanTemplateMinAggregate } from './plan-template-min-aggregate.output';
import { PlanTemplateMaxAggregate } from './plan-template-max-aggregate.output';

@ObjectType()
export class PlanTemplateGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => PlanCategory, {nullable:false})
    category!: `${PlanCategory}`;

    @Field(() => PlanLevel, {nullable:false})
    level!: `${PlanLevel}`;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
