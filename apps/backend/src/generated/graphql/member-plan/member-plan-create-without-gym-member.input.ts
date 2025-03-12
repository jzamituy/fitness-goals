import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanStatus } from '../prisma/plan-status.enum';
import { PlanTemplateCreateNestedOneWithoutMemberPlansInput } from '../plan-template/plan-template-create-nested-one-without-member-plans.input';

@InputType()
export class MemberPlanCreateWithoutGymMemberInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => PlanStatus, {nullable:true})
    status?: `${PlanStatus}`;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PlanTemplateCreateNestedOneWithoutMemberPlansInput, {nullable:false})
    planTemplate!: PlanTemplateCreateNestedOneWithoutMemberPlansInput;
}
