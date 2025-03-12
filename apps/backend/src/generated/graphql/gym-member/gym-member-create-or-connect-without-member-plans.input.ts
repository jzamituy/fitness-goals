import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutMemberPlansInput } from './gym-member-create-without-member-plans.input';

@InputType()
export class GymMemberCreateOrConnectWithoutMemberPlansInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutMemberPlansInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutMemberPlansInput)
    create!: GymMemberCreateWithoutMemberPlansInput;
}
