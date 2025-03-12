import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanUpdateInput } from './member-plan-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';

@ArgsType()
export class UpdateOneMemberPlanArgs {

    @Field(() => MemberPlanUpdateInput, {nullable:false})
    @Type(() => MemberPlanUpdateInput)
    data!: MemberPlanUpdateInput;

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;
}
