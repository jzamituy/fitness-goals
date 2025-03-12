import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanWhereInput } from './member-plan-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMemberPlanArgs {

    @Field(() => MemberPlanWhereInput, {nullable:true})
    @Type(() => MemberPlanWhereInput)
    where?: MemberPlanWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
