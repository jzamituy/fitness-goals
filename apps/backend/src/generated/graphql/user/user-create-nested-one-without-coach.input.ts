import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCoachInput } from './user-create-without-coach.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCoachInput } from './user-create-or-connect-without-coach.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCoachInput {

    @Field(() => UserCreateWithoutCoachInput, {nullable:true})
    @Type(() => UserCreateWithoutCoachInput)
    create?: UserCreateWithoutCoachInput;

    @Field(() => UserCreateOrConnectWithoutCoachInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCoachInput)
    connectOrCreate?: UserCreateOrConnectWithoutCoachInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
