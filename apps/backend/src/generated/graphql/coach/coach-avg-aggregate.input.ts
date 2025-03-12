import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CoachAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    experience?: true;
}
