import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CoachAvgAggregate {

    @Field(() => Float, {nullable:true})
    experience?: number;
}
