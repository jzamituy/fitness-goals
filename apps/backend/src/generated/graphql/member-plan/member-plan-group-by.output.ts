import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanStatus } from '../prisma/plan-status.enum';
import { MemberPlanCountAggregate } from './member-plan-count-aggregate.output';
import { MemberPlanMinAggregate } from './member-plan-min-aggregate.output';
import { MemberPlanMaxAggregate } from './member-plan-max-aggregate.output';

@ObjectType()
export class MemberPlanGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => String, {nullable:false})
    planTemplateId!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => PlanStatus, {nullable:false})
    status!: `${PlanStatus}`;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => MemberPlanCountAggregate, {nullable:true})
    _count?: MemberPlanCountAggregate;

    @Field(() => MemberPlanMinAggregate, {nullable:true})
    _min?: MemberPlanMinAggregate;

    @Field(() => MemberPlanMaxAggregate, {nullable:true})
    _max?: MemberPlanMaxAggregate;
}
