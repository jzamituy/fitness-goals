import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { GymMember } from '../gym-member/gym-member.model';
import { CoachCount } from './coach-count.output';

@ObjectType()
export class Coach {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [String], {nullable:true})
    specialties!: Array<string>;

    @Field(() => String, {nullable:true})
    certification!: string | null;

    @Field(() => Int, {nullable:true})
    experience!: number | null;

    @Field(() => String, {nullable:true})
    biography!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    availability!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [GymMember], {nullable:true})
    gymMembers?: Array<GymMember>;

    @Field(() => CoachCount, {nullable:false})
    _count?: CoachCount;
}
