import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanCreateWithoutPlanTemplateInput } from './member-plan-create-without-plan-template.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateOrConnectWithoutPlanTemplateInput } from './member-plan-create-or-connect-without-plan-template.input';
import { MemberPlanUpsertWithWhereUniqueWithoutPlanTemplateInput } from './member-plan-upsert-with-where-unique-without-plan-template.input';
import { MemberPlanCreateManyPlanTemplateInputEnvelope } from './member-plan-create-many-plan-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { MemberPlanUpdateWithWhereUniqueWithoutPlanTemplateInput } from './member-plan-update-with-where-unique-without-plan-template.input';
import { MemberPlanUpdateManyWithWhereWithoutPlanTemplateInput } from './member-plan-update-many-with-where-without-plan-template.input';
import { MemberPlanScalarWhereInput } from './member-plan-scalar-where.input';

@InputType()
export class MemberPlanUncheckedUpdateManyWithoutPlanTemplateNestedInput {

    @Field(() => [MemberPlanCreateWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanCreateWithoutPlanTemplateInput)
    create?: Array<MemberPlanCreateWithoutPlanTemplateInput>;

    @Field(() => [MemberPlanCreateOrConnectWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanCreateOrConnectWithoutPlanTemplateInput)
    connectOrCreate?: Array<MemberPlanCreateOrConnectWithoutPlanTemplateInput>;

    @Field(() => [MemberPlanUpsertWithWhereUniqueWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanUpsertWithWhereUniqueWithoutPlanTemplateInput)
    upsert?: Array<MemberPlanUpsertWithWhereUniqueWithoutPlanTemplateInput>;

    @Field(() => MemberPlanCreateManyPlanTemplateInputEnvelope, {nullable:true})
    @Type(() => MemberPlanCreateManyPlanTemplateInputEnvelope)
    createMany?: MemberPlanCreateManyPlanTemplateInputEnvelope;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanWhereUniqueInput], {nullable:true})
    @Type(() => MemberPlanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>>;

    @Field(() => [MemberPlanUpdateWithWhereUniqueWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanUpdateWithWhereUniqueWithoutPlanTemplateInput)
    update?: Array<MemberPlanUpdateWithWhereUniqueWithoutPlanTemplateInput>;

    @Field(() => [MemberPlanUpdateManyWithWhereWithoutPlanTemplateInput], {nullable:true})
    @Type(() => MemberPlanUpdateManyWithWhereWithoutPlanTemplateInput)
    updateMany?: Array<MemberPlanUpdateManyWithWhereWithoutPlanTemplateInput>;

    @Field(() => [MemberPlanScalarWhereInput], {nullable:true})
    @Type(() => MemberPlanScalarWhereInput)
    deleteMany?: Array<MemberPlanScalarWhereInput>;
}
