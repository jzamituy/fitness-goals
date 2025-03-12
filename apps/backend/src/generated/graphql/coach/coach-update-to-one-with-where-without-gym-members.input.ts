import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachWhereInput } from './coach-where.input';
import { Type } from 'class-transformer';
import { CoachUpdateWithoutGymMembersInput } from './coach-update-without-gym-members.input';

@InputType()
export class CoachUpdateToOneWithWhereWithoutGymMembersInput {

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    where?: CoachWhereInput;

    @Field(() => CoachUpdateWithoutGymMembersInput, {nullable:false})
    @Type(() => CoachUpdateWithoutGymMembersInput)
    data!: CoachUpdateWithoutGymMembersInput;
}
