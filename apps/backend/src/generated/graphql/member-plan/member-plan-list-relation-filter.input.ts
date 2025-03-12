import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanWhereInput } from './member-plan-where.input';

@InputType()
export class MemberPlanListRelationFilter {

    @Field(() => MemberPlanWhereInput, {nullable:true})
    every?: MemberPlanWhereInput;

    @Field(() => MemberPlanWhereInput, {nullable:true})
    some?: MemberPlanWhereInput;

    @Field(() => MemberPlanWhereInput, {nullable:true})
    none?: MemberPlanWhereInput;
}
