import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistCreateWithoutUserInput } from './nutritionist-create-without-user.input';
import { Type } from 'class-transformer';
import { NutritionistCreateOrConnectWithoutUserInput } from './nutritionist-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';

@InputType()
export class NutritionistUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => NutritionistCreateWithoutUserInput, {nullable:true})
    @Type(() => NutritionistCreateWithoutUserInput)
    create?: NutritionistCreateWithoutUserInput;

    @Field(() => NutritionistCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => NutritionistCreateOrConnectWithoutUserInput)
    connectOrCreate?: NutritionistCreateOrConnectWithoutUserInput;

    @Field(() => NutritionistWhereUniqueInput, {nullable:true})
    @Type(() => NutritionistWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;
}
