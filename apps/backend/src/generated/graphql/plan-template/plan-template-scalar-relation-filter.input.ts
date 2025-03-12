import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanTemplateWhereInput } from './plan-template-where.input';

@InputType()
export class PlanTemplateScalarRelationFilter {

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    is?: PlanTemplateWhereInput;

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    isNot?: PlanTemplateWhereInput;
}
