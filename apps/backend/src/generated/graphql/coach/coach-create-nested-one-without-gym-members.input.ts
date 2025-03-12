import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutGymMembersInput } from './coach-create-without-gym-members.input';
import { Type } from 'class-transformer';
import { CoachCreateOrConnectWithoutGymMembersInput } from './coach-create-or-connect-without-gym-members.input';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';

@InputType()
export class CoachCreateNestedOneWithoutGymMembersInput {

    @Field(() => CoachCreateWithoutGymMembersInput, {nullable:true})
    @Type(() => CoachCreateWithoutGymMembersInput)
    create?: CoachCreateWithoutGymMembersInput;

    @Field(() => CoachCreateOrConnectWithoutGymMembersInput, {nullable:true})
    @Type(() => CoachCreateOrConnectWithoutGymMembersInput)
    connectOrCreate?: CoachCreateOrConnectWithoutGymMembersInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    @Type(() => CoachWhereUniqueInput)
    connect?: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;
}
