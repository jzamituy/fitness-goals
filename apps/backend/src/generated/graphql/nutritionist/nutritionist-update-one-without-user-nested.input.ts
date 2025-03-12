import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistCreateWithoutUserInput } from './nutritionist-create-without-user.input';
import { Type } from 'class-transformer';
import { NutritionistCreateOrConnectWithoutUserInput } from './nutritionist-create-or-connect-without-user.input';
import { NutritionistUpsertWithoutUserInput } from './nutritionist-upsert-without-user.input';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { NutritionistUpdateToOneWithWhereWithoutUserInput } from './nutritionist-update-to-one-with-where-without-user.input';

@InputType()
export class NutritionistUpdateOneWithoutUserNestedInput {

    @Field(() => NutritionistCreateWithoutUserInput, {nullable:true})
    @Type(() => NutritionistCreateWithoutUserInput)
    create?: NutritionistCreateWithoutUserInput;

    @Field(() => NutritionistCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => NutritionistCreateOrConnectWithoutUserInput)
    connectOrCreate?: NutritionistCreateOrConnectWithoutUserInput;

    @Field(() => NutritionistUpsertWithoutUserInput, {nullable:true})
    @Type(() => NutritionistUpsertWithoutUserInput)
    upsert?: NutritionistUpsertWithoutUserInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    disconnect?: NutritionistWhereInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    delete?: NutritionistWhereInput;

    @Field(() => NutritionistWhereUniqueInput, {nullable:true})
    @Type(() => NutritionistWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => NutritionistUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => NutritionistUpdateToOneWithWhereWithoutUserInput)
    update?: NutritionistUpdateToOneWithWhereWithoutUserInput;
}
