import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutNutritionistInput } from './gym-member-create-without-nutritionist.input';

@InputType()
export class GymMemberCreateOrConnectWithoutNutritionistInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutNutritionistInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutNutritionistInput)
    create!: GymMemberCreateWithoutNutritionistInput;
}
