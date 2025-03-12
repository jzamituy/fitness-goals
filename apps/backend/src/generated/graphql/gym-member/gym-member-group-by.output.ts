import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GymMemberCountAggregate } from './gym-member-count-aggregate.output';
import { GymMemberMinAggregate } from './gym-member-min-aggregate.output';
import { GymMemberMaxAggregate } from './gym-member-max-aggregate.output';

@ObjectType()
export class GymMemberGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:true})
    membershipId?: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    coachId?: string;

    @Field(() => String, {nullable:true})
    nutritionistId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => GymMemberCountAggregate, {nullable:true})
    _count?: GymMemberCountAggregate;

    @Field(() => GymMemberMinAggregate, {nullable:true})
    _min?: GymMemberMinAggregate;

    @Field(() => GymMemberMaxAggregate, {nullable:true})
    _max?: GymMemberMaxAggregate;
}
