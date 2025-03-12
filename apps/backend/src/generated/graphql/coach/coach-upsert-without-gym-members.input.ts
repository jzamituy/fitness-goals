import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachUpdateWithoutGymMembersInput } from './coach-update-without-gym-members.input';
import { Type } from 'class-transformer';
import { CoachCreateWithoutGymMembersInput } from './coach-create-without-gym-members.input';
import { CoachWhereInput } from './coach-where.input';

@InputType()
export class CoachUpsertWithoutGymMembersInput {

    @Field(() => CoachUpdateWithoutGymMembersInput, {nullable:false})
    @Type(() => CoachUpdateWithoutGymMembersInput)
    update!: CoachUpdateWithoutGymMembersInput;

    @Field(() => CoachCreateWithoutGymMembersInput, {nullable:false})
    @Type(() => CoachCreateWithoutGymMembersInput)
    create!: CoachCreateWithoutGymMembersInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    where?: CoachWhereInput;
}
