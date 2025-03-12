import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateManyCoachInput } from './gym-member-create-many-coach.input';
import { Type } from 'class-transformer';

@InputType()
export class GymMemberCreateManyCoachInputEnvelope {

    @Field(() => [GymMemberCreateManyCoachInput], {nullable:false})
    @Type(() => GymMemberCreateManyCoachInput)
    data!: Array<GymMemberCreateManyCoachInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
