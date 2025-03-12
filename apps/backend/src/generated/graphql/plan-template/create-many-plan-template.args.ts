import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateCreateManyInput } from './plan-template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlanTemplateArgs {

    @Field(() => [PlanTemplateCreateManyInput], {nullable:false})
    @Type(() => PlanTemplateCreateManyInput)
    data!: Array<PlanTemplateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
