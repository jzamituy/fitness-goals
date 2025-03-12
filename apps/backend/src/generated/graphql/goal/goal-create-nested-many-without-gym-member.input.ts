import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalCreateWithoutGymMemberInput } from './goal-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { GoalCreateOrConnectWithoutGymMemberInput } from './goal-create-or-connect-without-gym-member.input';
import { GoalCreateManyGymMemberInputEnvelope } from './goal-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';

@InputType()
export class GoalCreateNestedManyWithoutGymMemberInput {

    @Field(() => [GoalCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalCreateWithoutGymMemberInput)
    create?: Array<GoalCreateWithoutGymMemberInput>;

    @Field(() => [GoalCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<GoalCreateOrConnectWithoutGymMemberInput>;

    @Field(() => GoalCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => GoalCreateManyGymMemberInputEnvelope)
    createMany?: GoalCreateManyGymMemberInputEnvelope;

    @Field(() => [GoalWhereUniqueInput], {nullable:true})
    @Type(() => GoalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GoalWhereUniqueInput, 'id'>>;
}
