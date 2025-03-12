import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanCreateManyPlanTemplateInput } from './member-plan-create-many-plan-template.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberPlanCreateManyPlanTemplateInputEnvelope {

    @Field(() => [MemberPlanCreateManyPlanTemplateInput], {nullable:false})
    @Type(() => MemberPlanCreateManyPlanTemplateInput)
    data!: Array<MemberPlanCreateManyPlanTemplateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
