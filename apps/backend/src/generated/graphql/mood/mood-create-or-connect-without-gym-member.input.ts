import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoodWhereUniqueInput } from './mood-where-unique.input';
import { Type } from 'class-transformer';
import { MoodCreateWithoutGymMemberInput } from './mood-create-without-gym-member.input';

@InputType()
export class MoodCreateOrConnectWithoutGymMemberInput {

    @Field(() => MoodWhereUniqueInput, {nullable:false})
    @Type(() => MoodWhereUniqueInput)
    where!: Prisma.AtLeast<MoodWhereUniqueInput, 'id'>;

    @Field(() => MoodCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => MoodCreateWithoutGymMemberInput)
    create!: MoodCreateWithoutGymMemberInput;
}
