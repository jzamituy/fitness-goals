import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MemberPlanUpdateWithoutPlanTemplateInput } from './member-plan-update-without-plan-template.input';
import { MemberPlanCreateWithoutPlanTemplateInput } from './member-plan-create-without-plan-template.input';

@InputType()
export class MemberPlanUpsertWithWhereUniqueWithoutPlanTemplateInput {

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => MemberPlanUpdateWithoutPlanTemplateInput, {nullable:false})
    @Type(() => MemberPlanUpdateWithoutPlanTemplateInput)
    update!: MemberPlanUpdateWithoutPlanTemplateInput;

    @Field(() => MemberPlanCreateWithoutPlanTemplateInput, {nullable:false})
    @Type(() => MemberPlanCreateWithoutPlanTemplateInput)
    create!: MemberPlanCreateWithoutPlanTemplateInput;
}
