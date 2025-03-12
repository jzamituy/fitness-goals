import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoachCreateWithoutGymMembersInput } from './coach-create-without-gym-members.input';
import { Type } from 'class-transformer';
import { CoachCreateOrConnectWithoutGymMembersInput } from './coach-create-or-connect-without-gym-members.input';
import { CoachUpsertWithoutGymMembersInput } from './coach-upsert-without-gym-members.input';
import { CoachWhereInput } from './coach-where.input';
import { Prisma } from '@prisma/client';
import { CoachWhereUniqueInput } from './coach-where-unique.input';
import { CoachUpdateToOneWithWhereWithoutGymMembersInput } from './coach-update-to-one-with-where-without-gym-members.input';

@InputType()
export class CoachUpdateOneWithoutGymMembersNestedInput {

    @Field(() => CoachCreateWithoutGymMembersInput, {nullable:true})
    @Type(() => CoachCreateWithoutGymMembersInput)
    create?: CoachCreateWithoutGymMembersInput;

    @Field(() => CoachCreateOrConnectWithoutGymMembersInput, {nullable:true})
    @Type(() => CoachCreateOrConnectWithoutGymMembersInput)
    connectOrCreate?: CoachCreateOrConnectWithoutGymMembersInput;

    @Field(() => CoachUpsertWithoutGymMembersInput, {nullable:true})
    @Type(() => CoachUpsertWithoutGymMembersInput)
    upsert?: CoachUpsertWithoutGymMembersInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    disconnect?: CoachWhereInput;

    @Field(() => CoachWhereInput, {nullable:true})
    @Type(() => CoachWhereInput)
    delete?: CoachWhereInput;

    @Field(() => CoachWhereUniqueInput, {nullable:true})
    @Type(() => CoachWhereUniqueInput)
    connect?: Prisma.AtLeast<CoachWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => CoachUpdateToOneWithWhereWithoutGymMembersInput, {nullable:true})
    @Type(() => CoachUpdateToOneWithWhereWithoutGymMembersInput)
    update?: CoachUpdateToOneWithWhereWithoutGymMembersInput;
}
