import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodCreateManyGymMemberInput } from './mood-create-many-gym-member.input';
import { Type } from 'class-transformer';

@InputType()
export class MoodCreateManyGymMemberInputEnvelope {

    @Field(() => [MoodCreateManyGymMemberInput], {nullable:false})
    @Type(() => MoodCreateManyGymMemberInput)
    data!: Array<MoodCreateManyGymMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
