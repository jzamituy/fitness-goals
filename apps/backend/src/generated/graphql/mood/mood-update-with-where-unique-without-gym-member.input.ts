import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';
import { Type } from 'class-transformer';
import { MoodUpdateWithoutGymMemberInput } from './mood-update-without-gym-member.input';

@InputType()
export class MoodUpdateWithWhereUniqueWithoutGymMemberInput {

    @Field(() => MoodWhereUniqueInput, {nullable:false})
    @Type(() => MoodWhereUniqueInput)
    where!: Prisma.AtLeast<MoodWhereUniqueInput, 'id'>;

    @Field(() => MoodUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => MoodUpdateWithoutGymMemberInput)
    data!: MoodUpdateWithoutGymMemberInput;
}
