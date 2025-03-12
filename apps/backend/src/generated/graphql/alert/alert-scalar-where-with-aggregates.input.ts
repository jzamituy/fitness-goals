import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { EnumAlertTypeWithAggregatesFilter } from '../prisma/enum-alert-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAlertStatusWithAggregatesFilter } from '../prisma/enum-alert-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AlertScalarWhereWithAggregatesInput {

    @Field(() => [AlertScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AlertScalarWhereWithAggregatesInput>;

    @Field(() => [AlertScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AlertScalarWhereWithAggregatesInput>;

    @Field(() => [AlertScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AlertScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    gymMemberId?: UuidWithAggregatesFilter;

    @Field(() => EnumAlertTypeWithAggregatesFilter, {nullable:true})
    type?: EnumAlertTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reason?: StringWithAggregatesFilter;

    @Field(() => EnumAlertStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAlertStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
