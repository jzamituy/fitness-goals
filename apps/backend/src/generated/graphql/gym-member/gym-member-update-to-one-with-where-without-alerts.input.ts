import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutAlertsInput } from './gym-member-update-without-alerts.input';

@InputType()
export class GymMemberUpdateToOneWithWhereWithoutAlertsInput {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => GymMemberUpdateWithoutAlertsInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutAlertsInput)
    data!: GymMemberUpdateWithoutAlertsInput;
}
