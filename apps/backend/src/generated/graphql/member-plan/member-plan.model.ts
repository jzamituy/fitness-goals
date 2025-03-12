import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PlanStatus } from '../prisma/plan-status.enum';
import { GymMember } from '../gym-member/gym-member.model';
import { PlanTemplate } from '../plan-template/plan-template.model';

@ObjectType()
export class MemberPlan {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => String, {nullable:false})
    planTemplateId!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => PlanStatus, {defaultValue:'ACTIVE',nullable:false})
    status!: `${PlanStatus}`;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GymMember, {nullable:false})
    gymMember?: GymMember;

    @Field(() => PlanTemplate, {nullable:false})
    planTemplate?: PlanTemplate;
}
