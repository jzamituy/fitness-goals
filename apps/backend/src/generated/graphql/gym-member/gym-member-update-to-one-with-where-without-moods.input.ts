import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutMoodsInput } from './gym-member-update-without-moods.input';

@InputType()
export class GymMemberUpdateToOneWithWhereWithoutMoodsInput {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => GymMemberUpdateWithoutMoodsInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutMoodsInput)
    data!: GymMemberUpdateWithoutMoodsInput;
}
