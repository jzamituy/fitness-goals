import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutNutritionistInput } from './gym-member-update-without-nutritionist.input';

@InputType()
export class GymMemberUpdateWithWhereUniqueWithoutNutritionistInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateWithoutNutritionistInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutNutritionistInput)
    data!: GymMemberUpdateWithoutNutritionistInput;
}
