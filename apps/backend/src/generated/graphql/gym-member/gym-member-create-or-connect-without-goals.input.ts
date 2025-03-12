import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutGoalsInput } from './gym-member-create-without-goals.input';

@InputType()
export class GymMemberCreateOrConnectWithoutGoalsInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutGoalsInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutGoalsInput)
    create!: GymMemberCreateWithoutGoalsInput;
}
