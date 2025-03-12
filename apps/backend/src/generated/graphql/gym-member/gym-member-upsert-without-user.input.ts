import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberUpdateWithoutUserInput } from './gym-member-update-without-user.input';
import { Type } from 'class-transformer';
import { GymMemberCreateWithoutUserInput } from './gym-member-create-without-user.input';
import { GymMemberWhereInput } from './gym-member-where.input';

@InputType()
export class GymMemberUpsertWithoutUserInput {

    @Field(() => GymMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutUserInput)
    update!: GymMemberUpdateWithoutUserInput;

    @Field(() => GymMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => GymMemberCreateWithoutUserInput)
    create!: GymMemberCreateWithoutUserInput;

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;
}
