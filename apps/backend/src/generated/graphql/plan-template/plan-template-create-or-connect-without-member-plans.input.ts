import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';
import { Type } from 'class-transformer';
import { PlanTemplateCreateWithoutMemberPlansInput } from './plan-template-create-without-member-plans.input';

@InputType()
export class PlanTemplateCreateOrConnectWithoutMemberPlansInput {

    @Field(() => PlanTemplateWhereUniqueInput, {nullable:false})
    @Type(() => PlanTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<PlanTemplateWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PlanTemplateCreateWithoutMemberPlansInput, {nullable:false})
    @Type(() => PlanTemplateCreateWithoutMemberPlansInput)
    create!: PlanTemplateCreateWithoutMemberPlansInput;
}
