import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AlertType } from '../prisma/alert-type.enum';
import { AlertStatus } from '../prisma/alert-status.enum';
import { GymMember } from '../gym-member/gym-member.model';

@ObjectType()
export class Alert {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    gymMemberId!: string;

    @Field(() => AlertType, {nullable:false})
    type!: `${AlertType}`;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => AlertStatus, {nullable:false})
    status!: `${AlertStatus}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GymMember, {nullable:false})
    gymMember?: GymMember;
}
