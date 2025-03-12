import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateUpdateManyMutationInput } from './plan-template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlanTemplateWhereInput } from './plan-template-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPlanTemplateArgs {

    @Field(() => PlanTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => PlanTemplateUpdateManyMutationInput)
    data!: PlanTemplateUpdateManyMutationInput;

    @Field(() => PlanTemplateWhereInput, {nullable:true})
    @Type(() => PlanTemplateWhereInput)
    where?: PlanTemplateWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
