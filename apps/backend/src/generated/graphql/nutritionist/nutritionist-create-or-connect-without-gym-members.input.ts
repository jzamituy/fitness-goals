import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NutritionistWhereUniqueInput } from './nutritionist-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionistCreateWithoutGymMembersInput } from './nutritionist-create-without-gym-members.input';

@InputType()
export class NutritionistCreateOrConnectWithoutGymMembersInput {

    @Field(() => NutritionistWhereUniqueInput, {nullable:false})
    @Type(() => NutritionistWhereUniqueInput)
    where!: Prisma.AtLeast<NutritionistWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => NutritionistCreateWithoutGymMembersInput, {nullable:false})
    @Type(() => NutritionistCreateWithoutGymMembersInput)
    create!: NutritionistCreateWithoutGymMembersInput;
}
