import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanCreateWithoutPlanTemplateInput } from './member-plan-create-without-plan-template.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateOrConnectWithoutPlanTemplateInput } from './member-plan-create-or-connect-without-plan-template.input';
import { MemberPlanCreateManyPlanTemplateInputEnvelope } from './member-plan-create-many-plan-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';

@InputType()
export class MemberPlanCreateNestedManyWithoutPlanTemplateInput {

    @Field(() => [MemberPlanCreateWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanCreateWithoutPlanTemplateInput)
    create?: Array<MemberPlanCreateWithoutPlanTemplateInput>;

    @Field(() => [MemberPlanCreateOrConnectWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanCreateOrConnectWithoutPlanTemplateInput)
    connectOrCreate?: Array<MemberPlanCreateOrConnectWithoutPlanTemplateInput>;

    @Field(() => MemberPlanCreateManyPlanTemplateInputEnvelope, {nullable:true})
    @Type(() => MemberPlanCreateManyPlanTemplateInputEnvelope)
    createMany?: MemberPlanCreateManyPlanTemplateInputEnvelope;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;
}
