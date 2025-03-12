import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertType } from '../prisma/alert-type.enum';
import { AlertStatus } from '../prisma/alert-status.enum';
import { GymMemberCreateNestedOneWithoutAlertsInput } from '../gym-member/gym-member-create-nested-one-without-alerts.input';

@InputType()
export class AlertCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AlertType, {nullable:false})
    type!: `${AlertType}`;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => AlertStatus, {nullable:false})
    status!: `${AlertStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GymMemberCreateNestedOneWithoutAlertsInput, {nullable:false})
    gymMember!: GymMemberCreateNestedOneWithoutAlertsInput;
}
