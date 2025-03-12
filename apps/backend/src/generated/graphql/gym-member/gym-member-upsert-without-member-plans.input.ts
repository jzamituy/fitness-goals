import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberUpdateWithoutMemberPlansInput } from './gym-member-update-without-member-plans.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutMemberPlansInput } from './gym-member-create-without-member-plans.input';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberUpsertWithoutMemberPlansInput {

    @Field(() => GymMemberUpdateWithoutMemberPlansInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutMemberPlansInput)
    update!: GymMemberUpdateWithoutMemberPlansInput;

    @Field(() => GymMemberCreateWithoutMemberPlansInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutMemberPlansInput)
    create!: GymMemberCreateWithoutMemberPlansInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;
}
