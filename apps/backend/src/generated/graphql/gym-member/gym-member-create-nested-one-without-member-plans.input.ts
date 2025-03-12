import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutMemberPlansInput } from './gym-member-create-without-member-plans.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutMemberPlansInput } from './gym-member-create-or-connect-without-member-plans.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@InputType()
export class GymMemberCreateNestedOneWithoutMemberPlansInput {

    @Field(() => GymMemberCreateWithoutMemberPlansInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutMemberPlansInput)
    create?: GymMemberCreateWithoutMemberPlansInput;

    @Field(() => GymMemberCreateOrConnectWithoutMemberPlansInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutMemberPlansInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutMemberPlansInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;
}
