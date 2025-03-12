import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutMemberPlansInput } from './gym-member-update-without-member-plans.input';

@InputType()
export class GymMemberUpdateToOneWithWhereWithoutMemberPlansInput {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => GymMemberUpdateWithoutMemberPlansInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutMemberPlansInput)
    data!: GymMemberUpdateWithoutMemberPlansInput;
}
