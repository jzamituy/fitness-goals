import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlertType } from '../prisma/alert-type.enum';
import { AlertStatus } from '../prisma/alert-status.enum';

@ObjectType()
export class AlertMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    gymMemberId?: string;

    @Field(() => AlertType, {nullable:true})
    type?: `${AlertType}`;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => AlertStatus, {nullable:true})
    status?: `${AlertStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
