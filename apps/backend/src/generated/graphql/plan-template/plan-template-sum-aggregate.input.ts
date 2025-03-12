import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanTemplateSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    duration?: true;
}
