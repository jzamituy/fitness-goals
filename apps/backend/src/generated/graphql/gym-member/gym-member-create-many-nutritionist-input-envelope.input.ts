import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateManyNutritionistInput } from './gym-member-create-many-nutritionist.input';
import { Type } from 'class-transformer';

@InputType()
export class GymMemberCreateManyNutritionistInputEnvelope {

    @Field(() => [GymMemberCreateManyNutritionistInput], {nullable:false})
    @Type(() => GymMemberCreateManyNutritionistInput)
    data!: Array<GymMemberCreateManyNutritionistInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
