import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlertWhereInput } from './alert-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumAlertTypeFilter } from '../prisma/enum-alert-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAlertStatusFilter } from '../prisma/enum-alert-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { GymMemberScalarRelationFilter } from '../gym-member/gym-member-scalar-relation-filter.input';

@InputType()
export class AlertWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AlertWhereInput], {nullable:true})
    AND?: Array<AlertWhereInput>;

    @Field(() => [AlertWhereInput], {nullable:true})
    OR?: Array<AlertWhereInput>;

    @Field(() => [AlertWhereInput], {nullable:true})
    NOT?: Array<AlertWhereInput>;

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

    @Field(() => GymMemberScalarRelationFilter, {nullable:true})
    gymMember?: GymMemberScalarRelationFilter;
}
