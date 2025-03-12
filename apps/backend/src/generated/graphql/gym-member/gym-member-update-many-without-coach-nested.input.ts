import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutCoachInput } from './gym-member-create-without-coach.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutCoachInput } from './gym-member-create-or-connect-without-coach.input';
import { GymMemberUpsertWithWhereUniqueWithoutCoachInput } from './gym-member-upsert-with-where-unique-without-coach.input';
import { GymMemberCreateManyCoachInputEnvelope } from './gym-member-create-many-coach-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateWithWhereUniqueWithoutCoachInput } from './gym-member-update-with-where-unique-without-coach.input';
import { GymMemberUpdateManyWithWhereWithoutCoachInput } from './gym-member-update-many-with-where-without-coach.input';
import { GymMemberScalarWhereInput } from './gym-member-scalar-where.input';

@InputType()
export class GymMemberUpdateManyWithoutCoachNestedInput {

    @Field(() => [GymMemberCreateWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberCreateWithoutCoachInput)
    create?: Array<GymMemberCreateWithoutCoachInput>;

    @Field(() => [GymMemberCreateOrConnectWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutCoachInput)
    connectOrCreate?: Array<GymMemberCreateOrConnectWithoutCoachInput>;

    @Field(() => [GymMemberUpsertWithWhereUniqueWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberUpsertWithWhereUniqueWithoutCoachInput)
    upsert?: Array<GymMemberUpsertWithWhereUniqueWithoutCoachInput>;

    @Field(() => GymMemberCreateManyCoachInputEnvelope, {nullable:true})
    @Type(() => GymMemberCreateManyCoachInputEnvelope)
    createMany?: GymMemberCreateManyCoachInputEnvelope;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [GymMemberUpdateWithWhereUniqueWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberUpdateWithWhereUniqueWithoutCoachInput)
    update?: Array<GymMemberUpdateWithWhereUniqueWithoutCoachInput>;

    @Field(() => [GymMemberUpdateManyWithWhereWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberUpdateManyWithWhereWithoutCoachInput)
    updateMany?: Array<GymMemberUpdateManyWithWhereWithoutCoachInput>;

    @Field(() => [GymMemberScalarWhereInput], {nullable:true})
    @Type(() => GymMemberScalarWhereInput)
    deleteMany?: Array<GymMemberScalarWhereInput>;
}
