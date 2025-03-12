import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanTemplateUpdateInput } from './plan-template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';

@ArgsType()
export class UpdateOnePlanTemplateArgs {

    @Field(() => PlanTemplateUpdateInput, {nullable:false})
    @Type(() => PlanTemplateUpdateInput)
    data!: PlanTemplateUpdateInput;

    @Field(() => PlanTemplateWhereUniqueInput, {nullable:false})
    @Type(() => PlanTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<PlanTemplateWhereUniqueInput, 'id' | 'name'>;
}
