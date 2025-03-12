import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertStatus } from './alert-status.enum';

@InputType()
export class NestedEnumAlertStatusFilter {

    @Field(() => AlertStatus, {nullable:true})
    equals?: `${AlertStatus}`;

    @Field(() => [AlertStatus], {nullable:true})
    in?: Array<`${AlertStatus}`>;

    @Field(() => [AlertStatus], {nullable:true})
    notIn?: Array<`${AlertStatus}`>;

    @Field(() => NestedEnumAlertStatusFilter, {nullable:true})
    not?: NestedEnumAlertStatusFilter;
}
