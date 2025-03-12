import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlertType } from '../prisma/alert-type.enum';
import { AlertStatus } from '../prisma/alert-status.enum';
import { AlertCountAggregate } from './alert-count-aggregate.output';
import { AlertMinAggregate } from './alert-min-aggregate.output';
import { AlertMaxAggregate } from './alert-max-aggregate.output';

@ObjectType()
export class AlertGroupBy {

    @Field(() => String, {nullable:false})
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
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AlertCountAggregate, {nullable:true})
    _count?: AlertCountAggregate;

    @Field(() => AlertMinAggregate, {nullable:true})
    _min?: AlertMinAggregate;

    @Field(() => AlertMaxAggregate, {nullable:true})
    _max?: AlertMaxAggregate;
}
