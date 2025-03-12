import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GoalCreateWithoutGymMemberInput } from './goal-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { GoalCreateOrConnectWithoutGymMemberInput } from './goal-create-or-connect-without-gym-member.input';
import { GoalUpsertWithWhereUniqueWithoutGymMemberInput } from './goal-upsert-with-where-unique-without-gym-member.input';
import { GoalCreateManyGymMemberInputEnvelope } from './goal-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GoalWhereUniqueInput } from './goal-where-unique.input';
import { GoalUpdateWithWhereUniqueWithoutGymMemberInput } from './goal-update-with-where-unique-without-gym-member.input';
import { GoalUpdateManyWithWhereWithoutGymMemberInput } from './goal-update-many-with-where-without-gym-member.input';
import { GoalScalarWhereInput } from './goal-scalar-where.input';

@InputType()
export class GoalUncheckedUpdateManyWithoutGymMemberNestedInput {

    @Field(() => [GoalCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalCreateWithoutGymMemberInput)
    create?: Array<GoalCreateWithoutGymMemberInput>;

    @Field(() => [GoalCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<GoalCreateOrConnectWithoutGymMemberInput>;

    @Field(() => [GoalUpsertWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalUpsertWithWhereUniqueWithoutGymMemberInput)
    upsert?: Array<GoalUpsertWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => GoalCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => GoalCreateManyGymMemberInputEnvelope)
    createMany?: GoalCreateManyGymMemberInputEnvelope;

    @Field(() => [GoalWhereUniqueInput], {nullable:true})
    @Type(() => GoalWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GoalWhereUniqueInput, 'id'>>;

    @Field(() => [GoalWhereUniqueInput], {nullable:true})
    @Type(() => GoalWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GoalWhereUniqueInput, 'id'>>;

    @Field(() => [GoalWhereUniqueInput], {nullable:true})
    @Type(() => GoalWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GoalWhereUniqueInput, 'id'>>;

    @Field(() => [GoalWhereUniqueInput], {nullable:true})
    @Type(() => GoalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GoalWhereUniqueInput, 'id'>>;

    @Field(() => [GoalUpdateWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalUpdateWithWhereUniqueWithoutGymMemberInput)
    update?: Array<GoalUpdateWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => [GoalUpdateManyWithWhereWithoutGymMemberInput], {nullable:true})
    @Type(() => GoalUpdateManyWithWhereWithoutGymMemberInput)
    updateMany?: Array<GoalUpdateManyWithWhereWithoutGymMemberInput>;

    @Field(() => [GoalScalarWhereInput], {nullable:true})
    @Type(() => GoalScalarWhereInput)
    deleteMany?: Array<GoalScalarWhereInput>;
}
