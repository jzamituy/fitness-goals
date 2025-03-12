import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { Type } from 'class-transformer';
import { CoachCreateWithoutGymMembersInput } from './coach-create-without-gym-members.input';

@InputType()
export class CoachCreateOrConnectWithoutGymMembersInput {

    @Field(() => CoachWhereUniqueInput, {nullable:false})
    @Type(() => CoachWhereUniqueInput)
    where!: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => CoachCreateWithoutGymMembersInput, {nullable:false})
    @Type(() => CoachCreateWithoutGymMembersInput)
    create!: CoachCreateWithoutGymMembersInput;
}
