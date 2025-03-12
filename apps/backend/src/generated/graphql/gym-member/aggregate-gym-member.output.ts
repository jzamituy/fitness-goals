import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GymMemberCountAggregate } from './gym-member-count-aggregate.output';
import { GymMemberMinAggregate } from './gym-member-min-aggregate.output';
import { GymMemberMaxAggregate } from './gym-member-max-aggregate.output';

@ObjectType()
export class AggregateGymMember {

    @Field(() => GymMemberCountAggregate, {nullable:true})
    _count?: GymMemberCountAggregate;

    @Field(() => GymMemberMinAggregate, {nullable:true})
    _min?: GymMemberMinAggregate;

    @Field(() => GymMemberMaxAggregate, {nullable:true})
    _max?: GymMemberMaxAggregate;
}
