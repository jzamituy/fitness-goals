import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutCoachInput } from './gym-member-create-without-coach.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutCoachInput } from './gym-member-create-or-connect-without-coach.input';
import { GymMemberCreateManyCoachInputEnvelope } from './gym-member-create-many-coach-input-envelope.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@InputType()
export class GymMemberCreateNestedManyWithoutCoachInput {

    @Field(() => [GymMemberCreateWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberCreateWithoutCoachInput)
    create?: Array<GymMemberCreateWithoutCoachInput>;

    @Field(() => [GymMemberCreateOrConnectWithoutCoachInput], {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutCoachInput)
    connectOrCreate?: Array<GymMemberCreateOrConnectWithoutCoachInput>;

    @Field(() => GymMemberCreateManyCoachInputEnvelope, {nullable:true})
    @Type(() => GymMemberCreateManyCoachInputEnvelope)
    createMany?: GymMemberCreateManyCoachInputEnvelope;

    @Field(() => [GymMemberWhereUniqueInput], {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>>;
}
