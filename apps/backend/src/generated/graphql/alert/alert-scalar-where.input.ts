import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumAlertTypeFilter } from '../prisma/enum-alert-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAlertStatusFilter } from '../prisma/enum-alert-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AlertScalarWhereInput {

    @Field(() => [AlertScalarWhereInput], {nullable:true})
    AND?: Array<AlertScalarWhereInput>;

    @Field(() => [AlertScalarWhereInput], {nullable:true})
    OR?: Array<AlertScalarWhereInput>;

    @Field(() => [AlertScalarWhereInput], {nullable:true})
    NOT?: Array<AlertScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    gymMemberId?: UuidFilter;

    @Field(() => EnumAlertTypeFilter, {nullable:true})
    type?: EnumAlertTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => EnumAlertStatusFilter, {nullable:true})
    status?: EnumAlertStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
