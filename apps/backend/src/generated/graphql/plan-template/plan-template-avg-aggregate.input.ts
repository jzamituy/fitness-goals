import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanTemplateAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    duration?: true;
}
