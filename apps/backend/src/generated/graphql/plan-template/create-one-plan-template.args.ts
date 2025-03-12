import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateCreateInput } from './plan-template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlanTemplateArgs {

    @Field(() => PlanTemplateCreateInput, {nullable:false})
    @Type(() => PlanTemplateCreateInput)
    data!: PlanTemplateCreateInput;
}
