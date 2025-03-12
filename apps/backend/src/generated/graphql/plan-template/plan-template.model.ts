import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PlanCategory } from '../prisma/plan-category.enum';
import { PlanLevel } from '../prisma/plan-level.enum';
import { Int } from '@nestjs/graphql';
import { MemberPlan } from '../member-plan/member-plan.model';
import { PlanTemplateCount } from './plan-template-count.output';

@ObjectType()
export class PlanTemplate {

    @Field(() => ID, {nullable:false})
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

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [MemberPlan], {nullable:true})
    memberPlans?: Array<MemberPlan>;

    @Field(() => PlanTemplateCount, {nullable:false})
    _count?: PlanTemplateCount;
}
