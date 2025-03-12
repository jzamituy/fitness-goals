import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutAlertsInput } from './gym-member-create-without-alerts.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutAlertsInput } from './gym-member-create-or-connect-without-alerts.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';

@InputType()
export class GymMemberCreateNestedOneWithoutAlertsInput {

    @Field(() => GymMemberCreateWithoutAlertsInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutAlertsInput)
    create?: GymMemberCreateWithoutAlertsInput;

    @Field(() => GymMemberCreateOrConnectWithoutAlertsInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutAlertsInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutAlertsInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;
}
