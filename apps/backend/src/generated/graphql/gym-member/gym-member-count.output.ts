import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GymMemberCount {

    @Field(() => Int, {nullable:false})
    goals?: number;

    @Field(() => Int, {nullable:false})
    attendances?: number;

    @Field(() => Int, {nullable:false})
    moods?: number;

    @Field(() => Int, {nullable:false})
    alerts?: number;

    @Field(() => Int, {nullable:false})
    memberPlans?: number;
}
