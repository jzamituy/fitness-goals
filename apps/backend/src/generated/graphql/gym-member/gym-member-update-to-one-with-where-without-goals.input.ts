import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutGoalsInput } from './gym-member-update-without-goals.input';

@InputType()
export class GymMemberUpdateToOneWithWhereWithoutGoalsInput {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => GymMemberUpdateWithoutGoalsInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutGoalsInput)
    data!: GymMemberUpdateWithoutGoalsInput;
}
