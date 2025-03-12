import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionistWhereInput } from './nutritionist-where.input';
import { Type } from 'class-transformer';
import { NutritionistUpdateWithoutGymMembersInput } from './nutritionist-update-without-gym-members.input';

@InputType()
export class NutritionistUpdateToOneWithWhereWithoutGymMembersInput {

    @Field(() => NutritionistWhereInput, {nullable:true})
    @Type(() => NutritionistWhereInput)
    where?: NutritionistWhereInput;

    @Field(() => NutritionistUpdateWithoutGymMembersInput, {nullable:false})
    @Type(() => NutritionistUpdateWithoutGymMembersInput)
    data!: NutritionistUpdateWithoutGymMembersInput;
}
