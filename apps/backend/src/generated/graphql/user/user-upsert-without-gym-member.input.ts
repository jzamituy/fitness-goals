import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutGymMemberInput } from './user-update-without-gym-member.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGymMemberInput } from './user-create-without-gym-member.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutGymMemberInput {

    @Field(() => UserUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => UserUpdateWithoutGymMemberInput)
    update!: UserUpdateWithoutGymMemberInput;

    @Field(() => UserCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => UserCreateWithoutGymMemberInput)
    create!: UserCreateWithoutGymMemberInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
