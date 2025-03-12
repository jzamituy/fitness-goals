import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUserStatusFilter } from './nested-enum-user-status-filter.input';

@InputType()
export class NestedEnumUserStatusWithAggregatesFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: `${UserStatus}`;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<`${UserStatus}`>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<`${UserStatus}`>;

    @Field(() => NestedEnumUserStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUserStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    _min?: NestedEnumUserStatusFilter;

    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    _max?: NestedEnumUserStatusFilter;
}
