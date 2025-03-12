import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanTemplateCreateWithoutMemberPlansInput } from './plan-template-create-without-member-plans.input';
import { Type } from 'class-transformer';
import { PlanTemplateCreateOrConnectWithoutMemberPlansInput } from './plan-template-create-or-connect-without-member-plans.input';
import { Prisma } from '@prisma/client';
import { PlanTemplateWhereUniqueInput } from './plan-template-where-unique.input';

@InputType()
export class PlanTemplateCreateNestedOneWithoutMemberPlansInput {

    @Field(() => PlanTemplateCreateWithoutMemberPlansInput, {nullable:true})
    @Type(() => PlanTemplateCreateWithoutMemberPlansInput)
    create?: PlanTemplateCreateWithoutMemberPlansInput;

    @Field(() => PlanTemplateCreateOrConnectWithoutMemberPlansInput, {nullable:true})
    @Type(() => PlanTemplateCreateOrConnectWithoutMemberPlansInput)
    connectOrCreate?: PlanTemplateCreateOrConnectWithoutMemberPlansInput;

    @Field(() => PlanTemplateWhereUniqueInput, {nullable:true})
    @Type(() => PlanTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<PlanTemplateWhereUniqueInput, 'id' | 'name'>;
}
