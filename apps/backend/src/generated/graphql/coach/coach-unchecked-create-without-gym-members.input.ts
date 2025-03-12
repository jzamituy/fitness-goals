import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreatespecialtiesInput } from './coach-createspecialties.input';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CoachUncheckedCreateWithoutGymMembersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CoachCreatespecialtiesInput, {nullable:true})
    specialties?: CoachCreatespecialtiesInput;

    @Field(() => String, {nullable:true})
    certification?: string;

    @Field(() => Int, {nullable:true})
    experience?: number;

    @Field(() => String, {nullable:true})
    biography?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    availability?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
