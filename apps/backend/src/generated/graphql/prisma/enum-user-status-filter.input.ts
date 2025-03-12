import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';
import { NestedEnumUserStatusFilter } from './nested-enum-user-status-filter.input';

@InputType()
export class EnumUserStatusFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: `${UserStatus}`;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<`${UserStatus}`>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<`${UserStatus}`>;

    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    not?: NestedEnumUserStatusFilter;
}
