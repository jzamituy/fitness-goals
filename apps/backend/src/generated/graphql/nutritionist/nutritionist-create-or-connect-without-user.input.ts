import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionistCreateWithoutUserInput } from './nutritionist-create-without-user.input';

@InputType()
export class NutritionistCreateOrConnectWithoutUserInput {

    @Field(() => NutritionistWhereUniqueInput, {nullable:false})
    @Type(() => NutritionistWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => NutritionistCreateWithoutUserInput, {nullable:false})
    @Type(() => NutritionistCreateWithoutUserInput)
    create!: NutritionistCreateWithoutUserInput;
}
