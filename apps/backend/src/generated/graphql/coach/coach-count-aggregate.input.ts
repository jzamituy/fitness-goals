import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CoachCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    specialties?: true;

    @Field(() => Boolean, {nullable:true})
    certification?: true;

    @Field(() => Boolean, {nullable:true})
    experience?: true;

    @Field(() => Boolean, {nullable:true})
    biography?: true;

    @Field(() => Boolean, {nullable:true})
    availability?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
