import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Type } from 'class-transformer';
import { AlertUpdateWithoutGymMemberInput } from './alert-update-without-gym-member.input';

@InputType()
export class AlertUpdateWithWhereUniqueWithoutGymMemberInput {

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: Prisma.AtLeast<AlertWhereUniqueInput, 'id'>;

    @Field(() => AlertUpdateWithoutGymMemberInput, {nullable:false})
    @Type(() => AlertUpdateWithoutGymMemberInput)
    data!: AlertUpdateWithoutGymMemberInput;
}
