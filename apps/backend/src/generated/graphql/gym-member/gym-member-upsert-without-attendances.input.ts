import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberUpdateWithoutAttendancesInput } from './gym-member-update-without-attendances.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutAttendancesInput } from './gym-member-create-without-attendances.input';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberUpsertWithoutAttendancesInput {

    @Field(() => GymMemberUpdateWithoutAttendancesInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutAttendancesInput)
    update!: GymMemberUpdateWithoutAttendancesInput;

    @Field(() => GymMemberCreateWithoutAttendancesInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutAttendancesInput)
    create!: GymMemberCreateWithoutAttendancesInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;
}
