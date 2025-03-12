import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoodLevel } from '../prisma/mood-level.enum';

@InputType()
export class MoodCreateWithoutGymMemberInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => MoodLevel, {nullable:false})
    level!: `${MoodLevel}`;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
