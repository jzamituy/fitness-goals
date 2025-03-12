import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlanTemplateArgs {

    @Field(() => PlanTemplateWhereUniqueInput, {nullable:false})
    @Type(() => PlanTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<PlanTemplateWhereUniqueInput, 'id' | 'name'>;
}
