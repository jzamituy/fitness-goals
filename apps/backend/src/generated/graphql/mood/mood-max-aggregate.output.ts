import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MoodLevel } from '../prisma/mood-level.enum';

@ObjectType()
export class MoodMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    gymMemberId?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => MoodLevel, {nullable:true})
    level?: `${MoodLevel}`;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
