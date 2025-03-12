import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GymMemberWhereInput } from './gym-member-where.input';
import { Type } from 'class-transformer';
import { GymMemberUpdateWithoutUserInput } from './gym-member-update-without-user.input';

@InputType()
export class GymMemberUpdateToOneWithWhereWithoutUserInput {

    @Field(() => GymMemberWhereInput, {nullable:true})
    @Type(() => GymMemberWhereInput)
    where?: GymMemberWhereInput;

    @Field(() => GymMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => GymMemberUpdateWithoutUserInput)
    data!: GymMemberUpdateWithoutUserInput;
}
