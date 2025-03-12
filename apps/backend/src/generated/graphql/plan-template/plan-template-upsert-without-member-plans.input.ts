import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanTemplateUpdateWithoutMemberPlansInput } from './plan-template-update-without-member-plans.input';
import { Type } from 'class-transformer';
import { PlanTemplateCreateWithoutMemberPlansInput } from './plan-template-create-without-member-plans.input';
import { PlanTemplateWhereInput } from './plan-template-where.input';

@InputType()
export class PlanTemplateUpsertWithoutMemberPlansInput {

    @Field(() => PlanTemplateUpdateWithoutMemberPlansInput, {nullable:false})
    @Type(() => PlanTemplateUpdateWithoutMemberPlansInput)
    update!: PlanTemplateUpdateWithoutMemberPlansInput;

    @Field(() => PlanTemplateCreateWithoutMemberPlansInput, {nullable:false})
    @Type(() => PlanTemplateCreateWithoutMemberPlansInput)
    create!: PlanTemplateCreateWithoutMemberPlansInput;

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    @Type(() => PlanTemplateWhereInput)
    where?: PlanTemplateWhereInput;
}
