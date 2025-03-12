import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutGoalsInput } from './gym-member-create-without-goals.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutGoalsInput } from './gym-member-create-or-connect-without-goals.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@InputType()
export class GymMemberCreateNestedOneWithoutGoalsInput {

    @Field(() => GymMemberCreateWithoutGoalsInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutGoalsInput)
    create?: GymMemberCreateWithoutGoalsInput;

    @Field(() => GymMemberCreateOrConnectWithoutGoalsInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutGoalsInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutGoalsInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;
}
