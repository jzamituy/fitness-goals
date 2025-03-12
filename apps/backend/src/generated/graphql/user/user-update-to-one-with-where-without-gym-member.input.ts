import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutGymMemberInput } from './user-update-without-gym-member.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutGymMemberInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => UserUpdateWithoutGymMemberInput)
    data!: UserUpdateWithoutGymMemberInput;
}
