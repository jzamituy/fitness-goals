import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionistAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    experience?: true;
}
