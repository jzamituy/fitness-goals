import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberCreateWithoutAttendancesInput } from './gym-member-create-without-attendances.input';
import { Type } from 'class-transformer';
import { GymMemberCreateOrConnectWithoutAttendancesInput } from './gym-member-create-or-connect-without-attendances.input';
import { GymMemberUpsertWithoutAttendancesInput } from './gym-member-upsert-without-attendances.input';
import { Prisma } from '@prisma/client';
import { GymMemberWhereUniqueInput } from './gym-member-where-unique.input';
import { GymMemberUpdateToOneWithWhereWithoutAttendancesInput } from './gym-member-update-to-one-with-where-without-attendances.input';

@InputType()
export class GymMemberUpdateOneRequiredWithoutAttendancesNestedInput {

    @Field(() => GymMemberCreateWithoutAttendancesInput, {nullable:true})
    @Type(() => GymMemberCreateWithoutAttendancesInput)
    create?: GymMemberCreateWithoutAttendancesInput;

    @Field(() => GymMemberCreateOrConnectWithoutAttendancesInput, {nullable:true})
    @Type(() => GymMemberCreateOrConnectWithoutAttendancesInput)
    connectOrCreate?: GymMemberCreateOrConnectWithoutAttendancesInput;

    @Field(() => GymMemberUpsertWithoutAttendancesInput, {nullable:true})
    @Type(() => GymMemberUpsertWithoutAttendancesInput)
    upsert?: GymMemberUpsertWithoutAttendancesInput;

    @Field(() => GymMemberWhereUniqueInput, {nullable:true})
    @Type(() => GymMemberWhereUniqueInput)
    connect?: Prisma.AtLeast<GymMemberWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => GymMemberUpdateToOneWithWhereWithoutAttendancesInput, {nullable:true})
    @Type(() => GymMemberUpdateToOneWithWhereWithoutAttendancesInput)
    update?: GymMemberUpdateToOneWithWhereWithoutAttendancesInput;
}
