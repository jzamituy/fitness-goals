import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateWithoutPlanTemplateInput } from './member-plan-create-without-plan-template.input';

@InputType()
export class MemberPlanCreateOrConnectWithoutPlanTemplateInput {

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => MemberPlanCreateWithoutPlanTemplateInput, {nullable:false})
    @Type(() => MemberPlanCreateWithoutPlanTemplateInput)
    create!: MemberPlanCreateWithoutPlanTemplateInput;
}
