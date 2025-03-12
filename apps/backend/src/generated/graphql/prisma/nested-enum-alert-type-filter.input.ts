import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertType } from './alert-type.enum';

@InputType()
export class NestedEnumAlertTypeFilter {

    @Field(() => AlertType, {nullable:true})
    equals?: `${AlertType}`;

    @Field(() => [AlertType], {nullable:true})
    in?: Array<`${AlertType}`>;

    @Field(() => [AlertType], {nullable:true})
    notIn?: Array<`${AlertType}`>;

    @Field(() => NestedEnumAlertTypeFilter, {nullable:true})
    not?: NestedEnumAlertTypeFilter;
}
