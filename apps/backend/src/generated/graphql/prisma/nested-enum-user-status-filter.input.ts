import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';

@InputType()
export class NestedEnumUserStatusFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: `${UserStatus}`;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<`${UserStatus}`>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<`${UserStatus}`>;

    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    not?: NestedEnumUserStatusFilter;
}
