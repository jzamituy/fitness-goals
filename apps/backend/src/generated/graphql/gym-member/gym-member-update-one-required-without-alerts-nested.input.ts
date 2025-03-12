import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutAlertsInput } from './gym-member-create-without-alerts.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutAlertsInput } from './gym-member-create-or-connect-without-alerts.input';
import { GymMemberUpsertWithoutAlertsInput } from './gym-member-upsert-without-alerts.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateToOneWithWhereWithoutAlertsInput } from './gym-member-update-to-one-with-where-without-alerts.input';

@InputType()
export class GymMemberUpdateOneRequiredWithoutAlertsNestedInput {

    @Field(() => GymMemberCreateWithoutAlertsInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutAlertsInput)
    create?: GymMemberCreateWithoutAlertsInput;

    @Field(() => GymMemberCreateOrConnectWithoutAlertsInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutAlertsInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutAlertsInput;

    @Field(() => GymMemberUpsertWithoutAlertsInput, {nullable:true})
    @Type(() => GymMemberUpsertWithoutAlertsInput)
    upsert?: GymMemberUpsertWithoutAlertsInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateToOneWithWhereWithoutAlertsInput, {nullable:true})
    @Type(() => GymMemberUpdateToOneWithWhereWithoutAlertsInput)
    update?: GymMemberUpdateToOneWithWhereWithoutAlertsInput;
}
