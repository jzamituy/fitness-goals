import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutUserInput } from './gym-member-create-without-user.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutUserInput } from './gym-member-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@InputType()
export class GymMemberCreateNestedOneWithoutUserInput {

    @Field(() => GymMemberCreateWithoutUserInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutUserInput)
    create?: GymMemberCreateWithoutUserInput;

    @Field(() => GymMemberCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutUserInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;
}
