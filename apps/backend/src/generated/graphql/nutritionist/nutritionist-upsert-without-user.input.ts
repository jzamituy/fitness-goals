import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistUpdateWithoutUserInput } from './nutritionist-update-without-user.input';
import { Type } from 'class-transformer';
import { NutritionistCreateWithoutUserInput } from './nutritionist-create-without-user.input';
import { NutritionistWhereInput } from './nutritionist-where.input';

@InputType()
export class NutritionistUpsertWithoutUserInput {

    @Field(() => NutritionistUpdateWithoutUserInput, {nullable:false})
    @Type(() => NutritionistUpdateWithoutUserInput)
    update!: NutritionistUpdateWithoutUserInput;

    @Field(() => NutritionistCreateWithoutUserInput, {nullable:false})
    @Type(() => NutritionistCreateWithoutUserInput)
    create!: NutritionistCreateWithoutUserInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;
}
