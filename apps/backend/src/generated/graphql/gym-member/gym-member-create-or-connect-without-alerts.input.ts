import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutAlertsInput } from './gym-member-create-without-alerts.input';

@InputType()
export class GymMemberCreateOrConnectWithoutAlertsInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutAlertsInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutAlertsInput)
    create!: GymMemberCreateWithoutAlertsInput;
}
