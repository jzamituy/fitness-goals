import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutUserInput } from './gym-member-create-without-user.input';

@InputType()
export class GymMemberCreateOrConnectWithoutUserInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutUserInput)
    create!: GymMemberCreateWithoutUserInput;
}
