import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutMoodsInput } from './gym-member-create-without-moods.input';

@InputType()
export class GymMemberCreateOrConnectWithoutMoodsInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutMoodsInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutMoodsInput)
    create!: GymMemberCreateWithoutMoodsInput;
}
