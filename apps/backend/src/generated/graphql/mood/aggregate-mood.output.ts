import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MoodCountAggregate } from './mood-count-aggregate.output';
import { MoodMinAggregate } from './mood-min-aggregate.output';
import { MoodMaxAggregate } from './mood-max-aggregate.output';

@ObjectType()
export class AggregateMood {

    @Field(() => MoodCountAggregate, {nullable:true})
    _count?: MoodCountAggregate;

    @Field(() => MoodMinAggregate, {nullable:true})
    _min?: MoodMinAggregate;

    @Field(() => MoodMaxAggregate, {nullable:true})
    _max?: MoodMaxAggregate;
}
