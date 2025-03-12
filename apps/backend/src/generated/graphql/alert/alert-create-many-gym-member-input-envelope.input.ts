import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertCreateManyGymMemberInput } from './alert-create-many-gym-member.input';
import { Type } from 'class-transformer';

@InputType()
export class AlertCreateManyGymMemberInputEnvelope {

    @Field(() => [AlertCreateManyGymMemberInput], {nullable:false})
    @Type(() => AlertCreateManyGymMemberInput)
    data!: Array<AlertCreateManyGymMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
