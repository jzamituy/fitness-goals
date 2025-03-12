import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionistCreateManyInput } from './nutritionist-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionistArgs {

    @Field(() => [NutritionistCreateManyInput], {nullable:false})
    @Type(() => NutritionistCreateManyInput)
    data!: Array<NutritionistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
