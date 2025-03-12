import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanTemplateWhereInput } from './plan-template-where.input';
import { Type } from 'class-transformer';
import { PlanTemplateUpdateWithoutMemberPlansInput } from './plan-template-update-without-member-plans.input';

@InputType()
export class PlanTemplateUpdateToOneWithWhereWithoutMemberPlansInput {

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    @Type(() => PlanTemplateWhereInput)
    where?: PlanTemplateWhereInput;

    @Field(() => PlanTemplateUpdateWithoutMemberPlansInput, {nullable:false})
    @Type(() => PlanTemplateUpdateWithoutMemberPlansInput)
    data!: PlanTemplateUpdateWithoutMemberPlansInput;
}
