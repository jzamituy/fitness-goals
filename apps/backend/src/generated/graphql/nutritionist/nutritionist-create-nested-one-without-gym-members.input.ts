import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistCreateWithoutGymMembersInput } from './nutritionist-create-without-gym-members.input';
import { Type } from 'class-transformer';
import { NutritionistCreateOrConnectWithoutGymMembersInput } from './nutritionist-create-or-connect-without-gym-members.input';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';

@InputType()
export class NutritionistCreateNestedOneWithoutGymMembersInput {

    @Field(() => NutritionistCreateWithoutGymMembersInput, {nullable:true})
    @Type(() => NutritionistCreateWithoutGymMembersInput)
    create?: NutritionistCreateWithoutGymMembersInput;

    @Field(() => NutritionistCreateOrConnectWithoutGymMembersInput, {nullable:true})
    @Type(() => NutritionistCreateOrConnectWithoutGymMembersInput)
    connectOrCreate?: NutritionistCreateOrConnectWithoutGymMembersInput;

    @Field(() => NutritionistWhereUniqueInput, {nullable:true})
    @Type(() => NutritionistWhereUniqueInput)
    connect?: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;
}
