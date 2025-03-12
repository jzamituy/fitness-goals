import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GymMemberCreateInput } from './gym-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGymMemberArgs {

    @Field(() => GymMemberCreateInput, {nullable:false})
    @Type(() => GymMemberCreateInput)
    data!: GymMemberCreateInput;
}
