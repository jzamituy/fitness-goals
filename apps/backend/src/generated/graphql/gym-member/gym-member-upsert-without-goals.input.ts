import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberUpdateWithoutGoalsInput } from './gym-member-update-without-goals.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutGoalsInput } from './gym-member-create-without-goals.input';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberUpsertWithoutGoalsInput {

    @Field(() => GymMemberUpdateWithoutGoalsInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutGoalsInput)
    update!: GymMemberUpdateWithoutGoalsInput;

    @Field(() => GymMemberCreateWithoutGoalsInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutGoalsInput)
    create!: GymMemberCreateWithoutGoalsInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;
}
