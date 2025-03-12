import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CoachSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    experience?: true;
}
