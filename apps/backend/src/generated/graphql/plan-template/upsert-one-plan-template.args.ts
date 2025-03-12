import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';
import { Type } from 'class-transformer';
import { PlanTemplateCreateInput } from './plan-template-create.input';
import { PlanTemplateUpdateInput } from './plan-template-update.input';

@ArgsType()
export class UpsertOnePlanTemplateArgs {

    @Field(() => PlanTemplateWhereUniqueInput, {nullable:false})
    @Type(() => PlanTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<PlanTemplateWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PlanTemplateCreateInput, {nullable:false})
    @Type(() => PlanTemplateCreateInput)
    create!: PlanTemplateCreateInput;

    @Field(() => PlanTemplateUpdateInput, {nullable:false})
    @Type(() => PlanTemplateUpdateInput)
    update!: PlanTemplateUpdateInput;
}
