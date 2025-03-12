import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MoodLevel } from '../prisma/mood-level.enum';
import { GymMember } from '../gym-member/gym-member.model';

@ObjectType()
export class Mood {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => MoodLevel, {nullable:false})
    level!: `${MoodLevel}`;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GymMember, {nullable:false})
    gymMember?: GymMember;
}
