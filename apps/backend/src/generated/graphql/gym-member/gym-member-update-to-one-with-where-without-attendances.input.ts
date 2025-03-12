import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutAttendancesInput } from './gym-member-update-without-attendances.input';

@InputType()
export class GymMemberUpdateToOneWithWhereWithoutAttendancesInput {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => GymMemberUpdateWithoutAttendancesInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutAttendancesInput)
    data!: GymMemberUpdateWithoutAttendancesInput;
}
