import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberUpdateWithoutAlertsInput } from './gym-member-update-without-alerts.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutAlertsInput } from './gym-member-create-without-alerts.input';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberUpsertWithoutAlertsInput {

    @Field(() => GymMemberUpdateWithoutAlertsInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutAlertsInput)
    update!: GymMemberUpdateWithoutAlertsInput;

    @Field(() => GymMemberCreateWithoutAlertsInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutAlertsInput)
    create!: GymMemberCreateWithoutAlertsInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;
}
