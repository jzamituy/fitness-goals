import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGymMemberInput } from './user-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGymMemberInput } from './user-create-or-connect-without-gym-member.input';
import { UserUpsertWithoutGymMemberInput } from './user-upsert-without-gym-member.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutGymMemberInput } from './user-update-to-one-with-where-without-gym-member.input';

@InputType()
export class UserUpdateOneRequiredWithoutGymMemberNestedInput {

    @Field(() => UserCreateWithoutGymMemberInput, {nullable:true})
    @Type(() => UserCreateWithoutGymMemberInput)
    create?: UserCreateWithoutGymMemberInput;

    @Field(() => UserCreateOrConnectWithoutGymMemberInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: UserCreateOrConnectWithoutGymMemberInput;

    @Field(() => UserUpsertWithoutGymMemberInput, {nullable:true})
    @Type(() => UserUpsertWithoutGymMemberInput)
    upsert?: UserUpsertWithoutGymMemberInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutGymMemberInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutGymMemberInput)
    update?: UserUpdateToOneWithWhereWithoutGymMemberInput;
}
