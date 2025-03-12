import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Type } from 'class-transformer';
import { AlertCreateWithoutGymMemberInput } from './alert-create-without-gym-member.input';

@InputType()
export class AlertCreateOrConnectWithoutGymMemberInput {

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: Prisma.AtLeast<AlertWhereUniqueInput, 'id'>;

    @Field(() => AlertCreateWithoutGymMemberInput, {nullable:false})
    @Type(() => AlertCreateWithoutGymMemberInput)
    create!: AlertCreateWithoutGymMemberInput;
}
