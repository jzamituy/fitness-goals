import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberUpdateWithoutMoodsInput } from './gym-member-update-without-moods.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutMoodsInput } from './gym-member-create-without-moods.input';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberUpsertWithoutMoodsInput {

    @Field(() => GymMemberUpdateWithoutMoodsInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutMoodsInput)
    update!: GymMemberUpdateWithoutMoodsInput;

    @Field(() => GymMemberCreateWithoutMoodsInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutMoodsInput)
    create!: GymMemberCreateWithoutMoodsInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;
}
