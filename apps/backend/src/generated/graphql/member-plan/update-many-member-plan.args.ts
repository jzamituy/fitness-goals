import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberPlanUpdateManyMutationInput } from './member-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemberPlanWhereInput } from './member-plan-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMemberPlanArgs {

    @Field(() => MemberPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberPlanUpdateManyMutationInput)
    data!: MemberPlanUpdateManyMutationInput;

    @Field(() => MemberPlanWhereInput, {nullable:true})
    @Type(() => MemberPlanWhereInput)
    where?: MemberPlanWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
