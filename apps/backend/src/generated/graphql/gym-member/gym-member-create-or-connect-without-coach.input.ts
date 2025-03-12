import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutCoachInput } from './gym-member-create-without-coach.input';

@InputType()
export class GymMemberCreateOrConnectWithoutCoachInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutCoachInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutCoachInput)
    create!: GymMemberCreateWithoutCoachInput;
}
