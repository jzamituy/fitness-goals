import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanWhereInput } from './member-plan-where.input';
import { Type } from 'class-transformer';
import { MemberPlanOrderByWithRelationInput } from './member-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MemberPlanWhereUniqueInput } from './member-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberPlanScalarFieldEnum } from './member-plan-scalar-field.enum';

@ArgsType()
export class FindFirstMemberPlanOrThrowArgs {

    @Field(() => MemberPlanWhereInput, {nullable:true})
    @Type(() => MemberPlanWhereInput)
    where?: MemberPlanWhereInput;

    @Field(() => [MemberPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberPlanOrderByWithRelationInput>;

    @Field(() => MemberPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MemberPlanWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MemberPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MemberPlanScalarFieldEnum}`>;
}
