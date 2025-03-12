import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberPlanCreateManyGymMemberInput } from './member-plan-create-many-gym-member.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberPlanCreateManyGymMemberInputEnvelope {

    @Field(() => [MemberPlanCreateManyGymMemberInput], {nullable:false})
    @Type(() => MemberPlanCreateManyGymMemberInput)
    data!: Array<MemberPlanCreateManyGymMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
