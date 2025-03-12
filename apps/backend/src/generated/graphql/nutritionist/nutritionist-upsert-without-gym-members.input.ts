import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistUpdateWithoutGymMembersInput } from './nutritionist-update-without-gym-members.input';
import { Type } from 'class-transformer';
import { NutritionistCreateWithoutGymMembersInput } from './nutritionist-create-without-gym-members.input';
import { NutritionistWhereInput } from './nutritionist-where.input';

@InputType()
export class NutritionistUpsertWithoutGymMembersInput {

    @Field(() => NutritionistUpdateWithoutGymMembersInput, {nullable:false})
    @Type(() => NutritionistUpdateWithoutGymMembersInput)
    update!: NutritionistUpdateWithoutGymMembersInput;

    @Field(() => NutritionistCreateWithoutGymMembersInput, {nullable:false})
    @Type(() => NutritionistCreateWithoutGymMembersInput)
    create!: NutritionistCreateWithoutGymMembersInput;

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;
}
