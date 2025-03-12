import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistCreateInput } from './nutritionist-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionistArgs {

    @Field(() => NutritionistCreateInput, {nullable:false})
    @Type(() => NutritionistCreateInput)
    data!: NutritionistCreateInput;
}
