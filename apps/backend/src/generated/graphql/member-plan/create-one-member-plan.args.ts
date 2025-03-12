import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanCreateInput } from './member-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemberPlanArgs {

    @Field(() => MemberPlanCreateInput, {nullable:false})
    @Type(() => MemberPlanCreateInput)
    data!: MemberPlanCreateInput;
}
