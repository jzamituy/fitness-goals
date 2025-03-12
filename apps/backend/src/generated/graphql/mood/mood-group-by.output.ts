import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MoodLevel } from '../prisma/mood-level.enum';
import { MoodCountAggregate } from './mood-count-aggregate.output';
import { MoodMinAggregate } from './mood-min-aggregate.output';
import { MoodMaxAggregate } from './mood-max-aggregate.output';

@ObjectType()
export class MoodGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => MoodLevel, {nullable:false})
    level!: `${MoodLevel}`;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => MoodCountAggregate, {nullable:true})
    _count?: MoodCountAggregate;

    @Field(() => MoodMinAggregate, {nullable:true})
    _min?: MoodMinAggregate;

    @Field(() => MoodMaxAggregate, {nullable:true})
    _max?: MoodMaxAggregate;
}
