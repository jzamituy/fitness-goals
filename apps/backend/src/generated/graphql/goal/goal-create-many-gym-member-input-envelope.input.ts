import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalCreateManyGymMemberInput } from './goal-create-many-gym-member.input';
import { Type } from 'class-transformer';

@InputType()
export class GoalCreateManyGymMemberInputEnvelope {

    @Field(() => [GoalCreateManyGymMemberInput], {nullable:false})
    @Type(() => GoalCreateManyGymMemberInput)
    data!: Array<GoalCreateManyGymMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
