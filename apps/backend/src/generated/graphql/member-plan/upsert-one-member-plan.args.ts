import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Type } from 'class-transformer';
import { MemberPlanCreateInput } from './member-plan-create.input';
import { MemberPlanUpdateInput } from './member-plan-update.input';

@ArgsType()
export class UpsertOneMemberPlanArgs {

    @Field(() => MemberPlanWhereUniqueInput, {nullable:false})
    @Type(() => MemberPlanWhereUniqueInput)
    where!: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => MemberPlanCreateInput, {nullable:false})
    @Type(() => MemberPlanCreateInput)
    create!: MemberPlanCreateInput;

    @Field(() => MemberPlanUpdateInput, {nullable:false})
    @Type(() => MemberPlanUpdateInput)
    update!: MemberPlanUpdateInput;
}
