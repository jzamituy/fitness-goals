import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutNutritionistInput } from './gym-member-update-without-nutritionist.input';
import { GymMemberCreateWithoutNutritionistInput } from './gym-member-create-without-nutritionist.input';

@InputType()
export class GymMemberUpsertWithWhereUniqueWithoutNutritionistInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateWithoutNutritionistInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutNutritionistInput)
    update!: GymMemberUpdateWithoutNutritionistInput;

    @Field(() => GymMemberCreateWithoutNutritionistInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutNutritionistInput)
    create!: GymMemberCreateWithoutNutritionistInput;
}
