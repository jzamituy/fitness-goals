import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertCreateWithoutGymMemberInput } from './alert-create-without-gym-member.input';
import { Type } from 'class-transformer';
import { AlertCreateOrConnectWithoutGymMemberInput } from './alert-create-or-connect-without-gym-member.input';
import { AlertUpsertWithWhereUniqueWithoutGymMemberInput } from './alert-upsert-with-where-unique-without-gym-member.input';
import { AlertCreateManyGymMemberInputEnvelope } from './alert-create-many-gym-member-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { AlertUpdateWithWhereUniqueWithoutGymMemberInput } from './alert-update-with-where-unique-without-gym-member.input';
import { AlertUpdateManyWithWhereWithoutGymMemberInput } from './alert-update-many-with-where-without-gym-member.input';
import { AlertScalarWhereInput } from './alert-scalar-where.input';

@InputType()
export class AlertUncheckedUpdateManyWithoutGymMemberNestedInput {

    @Field(() => [AlertCreateWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertCreateWithoutGymMemberInput)
    create?: Array<AlertCreateWithoutGymMemberInput>;

    @Field(() => [AlertCreateOrConnectWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertCreateOrConnectWithoutGymMemberInput)
    connectOrCreate?: Array<AlertCreateOrConnectWithoutGymMemberInput>;

    @Field(() => [AlertUpsertWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertUpsertWithWhereUniqueWithoutGymMemberInput)
    upsert?: Array<AlertUpsertWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => AlertCreateManyGymMemberInputEnvelope, {nullable:true})
    @Type(() => AlertCreateManyGymMemberInputEnvelope)
    createMany?: AlertCreateManyGymMemberInputEnvelope;

    @Field(() => [AlertWhereUniqueInput], {nullable:true})
    @Type(() => AlertWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AlertWhereUniqueInput, 'id'>>;

    @Field(() => [AlertWhereUniqueInput], {nullable:true})
    @Type(() => AlertWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AlertWhereUniqueInput, 'id'>>;

    @Field(() => [AlertWhereUniqueInput], {nullable:true})
    @Type(() => AlertWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AlertWhereUniqueInput, 'id'>>;

    @Field(() => [AlertWhereUniqueInput], {nullable:true})
    @Type(() => AlertWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AlertWhereUniqueInput, 'id'>>;

    @Field(() => [AlertUpdateWithWhereUniqueWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertUpdateWithWhereUniqueWithoutGymMemberInput)
    update?: Array<AlertUpdateWithWhereUniqueWithoutGymMemberInput>;

    @Field(() => [AlertUpdateManyWithWhereWithoutGymMemberInput], {nullable:true})
    @Type(() => AlertUpdateManyWithWhereWithoutGymMemberInput)
    updateMany?: Array<AlertUpdateManyWithWhereWithoutGymMemberInput>;

    @Field(() => [AlertScalarWhereInput], {nullable:true})
    @Type(() => AlertScalarWhereInput)
    deleteMany?: Array<AlertScalarWhereInput>;
}
