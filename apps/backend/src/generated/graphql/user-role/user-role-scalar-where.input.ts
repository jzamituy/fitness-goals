import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserRoleScalarWhereInput {

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    AND?: Array<UserRoleScalarWhereInput>;

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    OR?: Array<UserRoleScalarWhereInput>;

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    NOT?: Array<UserRoleScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    userId?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    roleId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
