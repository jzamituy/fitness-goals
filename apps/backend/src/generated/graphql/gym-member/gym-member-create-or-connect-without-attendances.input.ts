import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutAttendancesInput } from './gym-member-create-without-attendances.input';

@InputType()
export class GymMemberCreateOrConnectWithoutAttendancesInput {

    @Field(() => GymMemberWhereUniqueInput, {nullable:false})
    @Type(() => GymMemberWhereUniqueInput)
    where!: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberCreateWithoutAttendancesInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutAttendancesInput)
    create!: GymMemberCreateWithoutAttendancesInput;
}
