import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCoachInput } from './user-create-or-connect-without-coach.input';
import { UserUpsertWithoutCoachInput } from './user-upsert-without-coach.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCoachInput } from './user-update-to-one-with-where-without-coach.input';

@InputType()
export class UserUpdateOneRequiredWithoutCoachNestedInput {

    @Field(() => UserCreateWithoutCoachInput, {nullable:true})
    @Type(() => UserCreateWithoutCoachInput)
    create?: UserCreateWithoutCoachInput;

    @Field(() => UserCreateOrConnectWithoutCoachInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCoachInput)
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput;

    @Field(() => UserUpsertWithoutCoachInput, {nullable:true})
    @Type(() => UserUpsertWithoutCoachInput)
    upsert?: UserUpsertWithoutCoachInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCoachInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCoachInput)
    update?: UserUpdateToOneWithWhereWithoutCoachInput;
}
