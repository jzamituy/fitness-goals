import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionistCreatespecialtiesInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
